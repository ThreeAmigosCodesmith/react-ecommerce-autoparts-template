const express = require('express');

const app = express();
// const path = require('path');
const cookieParser = require('cookie-parser');

/* eslint import/no-unresolved: 2 */
const PORT = 8080;

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

const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// statically render index.html file when user hits / - (mandatory)
// app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

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

// listens on port 8080 -> http://localhost:8080/
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
