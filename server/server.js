const express = require('express');

const app = express();
// const path = require('path');
const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
/* eslint import/no-unresolved: 2 */
// const { MONGO_URI } = require('../db/config.json');

const PORT = 8080;

const stripeRouter = require('./routes/stripe');
const apiRouter = require('./routes/api');

// Connect to our database
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   // eslint-disable-next-line no-console
//   console.log('Connected to Database');
// });

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// statically render index.html file when user hits / - (mandatory)
// app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers

/* eslint-disable  */

//const calculateOrderAmount = () => 1400;
// Replace this constant with a calculation of the order's amount
// Calculate the order total on the server to prevent
// people from directly manipulating the amount on the client

app.use('/pay', stripeRouter)
//   console.log('hi')
//   console.log(request.body)

//   try {
//     let intent;
//     if (request.body.payment_method_id) {
//       // Create the PaymentIntent
//       intent = await stripe.paymentIntents.create({
//         payment_method: request.body.payment_method_id,
//         amount: request.body.payment_amount * 100,
//         currency: 'usd',
//         confirmation_method: 'manual',
//         confirm: true
//       });
//     } else if (request.body.payment_intent_id) {
//       intent = await stripe.paymentIntents.confirm(
//         request.body.payment_intent_id
//       );
//     }
//     // Send the response to the client
//     console.log(intent)
//     response.send(generateResponse(intent));
//   } catch (e) {
//     // Display error on client
//     console.log(e)
//     return response.send({ error: e.message });
//   }
// });

// const generateResponse = (intent) => {
//   // Note that if your API version is before 2019-02-11, 'requires_action'
//   // appears as 'requires_source_action'.
//   if (
//     intent.status === 'requires_action' &&
//     intent.next_action.type === 'use_stripe_sdk'
//   ) {
//     // Tell the client to handle the action
//     return {
//       requires_action: true,
//       payment_intent_client_secret: intent.client_secret
//     };
//   } else if (intent.status === 'succeeded') {
//     // The payment didn’t need any additional actions and completed!
//     // Handle post-payment fulfillment
//     return {
//       success: true
//     };
//   } else {
//     // Invalid status
//     return {
//       error: 'Invalid PaymentIntent status'
//     }
//   }
// };

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
