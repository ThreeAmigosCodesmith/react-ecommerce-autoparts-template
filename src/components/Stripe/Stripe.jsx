import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
/* eslint-disable react/prop-types */
import SplitForm from './SplitForm';
import STRIPE_API from '../../apiKeys';
import './StripeStyle.css';

const stripePromise = loadStripe(STRIPE_API.STRIPE_API);

/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable */

const Stripe = () => {
  return (
  <Elements stripe={stripePromise}>
    {console.log(STRIPE_API)}
    <SplitForm />
  </Elements>
  );
};

export default Stripe;
