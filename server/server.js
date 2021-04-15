/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const PORT = 8080;

// Initialize datbase
const db = require('./models/index');

// Connect to database
const connectDB = async () => {
  try {
    await db.authenticate();
    // eslint-disable-next-line no-console
    console.log('Connected to db.');
    // Sync schema in models folder to datbase schema
    await db.sync({ alter: true });
    // eslint-disable-next-line no-console
    console.log('Models synchronized successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

const stripeRouter = require('./routes/stripe');
const apiRouter = require('./routes/api');
const imageUploadRouter = require('./routes/upload');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

// statically render index.html file when user hits / - (mandatory)
app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers
app.use('/pay', stripeRouter);
app.use('/api', apiRouter);
app.use('/v1/upload', imageUploadRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("This is not the page you're looking for..."));

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: err.message,
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = { ...defaultErr, ...err };
  // eslint-disable-next-line no-console
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Connect the websocket connection to the express server
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
  forceNewConnection: false,
});

io.on('connection', async (socket) => {
  const { chat } = db.models;

  const createWelcomeChat = () => {
    const {
      query: {
        chatSessionID,
        supplierID,
        customerID,
        createdAt,
      },
    } = socket.handshake;
    // Generate an inital chat from the supplier
    const firstChat = {
      chatSessionID,
      message: 'Thank you for chatting with us! Please standby and we\'ll be with you in a moment.',
      createdAt,
      customerID,
      supplierID,
      active: true,
      sender: supplierID,
    };

    // Send the message back to the user
    socket.emit('new-message', firstChat);
    chat.create(firstChat);

    // Join a room with that specific chat ID
    socket.join(chatSessionID);
  };

  createWelcomeChat();

  // SOCKET.IO EVENT LISTENERS
  socket.on('new-message', async (message) => {
    console.log(message);
    chat.create(message);
  });

  // End the chat for the user and update active status to FALSE in the datbase
  socket.on('end', (chatSessionID) => {
    chat.update({ active: false }, {
      where: {
        chatSessionID,
      },
    });
    socket.disconnect(0);
  });
});

// initialize server on port 8080 -> http://localhost:8080/
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
