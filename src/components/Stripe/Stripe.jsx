import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SplitForm from './SplitForm';

import './styles.css';

const stripePromise = loadStripe('pk_test_51IdmGUI3WvfYEKcmWkYIb8Eec40VM32eNd3fsTJft1DNt7PzwWg3IiG8Lh6IVVGXnSF3x8l1ASTfWDP4gcsXblsv00eZLNQjXH');

/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable */

const Stripe = () => {
  return (
  <Elements stripe={stripePromise}>
    <SplitForm />
  </Elements>
  );
};

export default Stripe;
