const stripe = require('stripe')('sk_test_51IdmGUI3WvfYEKcm3RbozHs02rMeQv6EqQVNmgshxlvBDZjZxi9aC35MQq23D9rJtm17OgebV1DEKa7AdqFlFszq00r0D8t3zy');

const stripeController = {};
/* eslint-disable  */

stripeController.processPayment = async (request, response, next) => {
  console.log('hi');
  console.log(request.body);
  try {
    let intent;
    if (request.body.payment_method_id) {
    // Create the PaymentIntent
      intent = await stripe.paymentIntents.create({
        payment_method: request.body.payment_method_id,
        amount: request.body.payment_amount * 100,
        currency: 'usd',
        confirmation_method: 'manual',
        confirm: true
      });
    } else if (request.body.payment_intent_id) {
      intent = await stripe.paymentIntents.confirm(
        request.body.payment_intent_id,
      );
    }
    // Send the response to the client
    //console.log(intent);
    response.send(generateResponse(intent, intent.id));
  } catch (e) {
    // Display error on client
    console.log(e);
    return response.send({ error: e.message });
  }
};

/* eslint-disable  */

const generateResponse = (intent, id) => {
  if (
    intent.status === 'requires_action' &&
    intent.next_action.type === 'use_stripe_sdk'
  ) {
    // Tell the client to handle the action
    return {
      requires_action: true,
      payment_intent_client_secret: intent.client_secret,
    };
  } else if (intent.status === 'succeeded') {
    // Handle post-payment fulfillment
    return {
    success: true, confirmation: id
    };
  } else {
    // Invalid status
    return {
      error: 'Invalid PaymentIntent status'
    }
  }
};

module.exports = stripeController;
