const express = require('express');
const app = express();
const path = require('path');
// const cookieParser = require('cookie-parser');
const { MONGO_URI } = require("../database/config.json");
const mongoose = require('mongoose');
const PORT = 8080;

const apiRouter = require('./routes/api');

// Connect to our database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

 // handle parsing request body
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
//  app.use(cookieParser());

// statically render index.html file when user hits / - (mandatory)
// app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers
 app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: err.message,
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port 8080 -> http://localhost:8080/
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
}); 

module.exports = app;
