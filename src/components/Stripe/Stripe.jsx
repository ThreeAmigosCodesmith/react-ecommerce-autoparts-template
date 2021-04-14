import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SplitForm from './SplitForm';

import './styles.css';

const stripePromise = loadStripe('pk_test_51IdmGUI3WvfYEKcmFVV3WzyWnaLfZzmt04srr4M5E3gcv0zmlYkEtNZuHM8IyrhXUR2lADyxJLF6vso3LAdb9lKP00VlWpEVRd');

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
