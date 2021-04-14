/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();
const path = require('path');

const cors = require('cors');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
/* eslint import/no-unresolved: 2 */
const PORT = 8080;

const stripeRouter = require('./routes/stripe');
const apiRouter = require('./routes/api');
// const imageUploadRouter = require('./routes/upload');

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

// app.use('/v1/upload', imageUploadRouter);

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
// listens on port 8080 -> http://localhost:8080/
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
