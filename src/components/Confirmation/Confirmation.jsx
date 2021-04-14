import React, { useMemo } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import useResponsiveFontSize from './useResponsiveFontSize';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [fontSize],
  );

  return options;
};

const SplitForm = () => {
  const [{ cart }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  /* eslint-disable jsx-a11y/label-has-associated-control */

  /*eslint-disable*/

  function stripePaymentMethodHandler(result) {
    console.log('hello')
    if (result.error) {
      // Show error in payment form
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 4)
      fetch('/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_method_id: result.paymentMethod.id,
          payment_amount: cart.reduce((acc, curr) => (acc + curr.price), 0)
        }),
      }).then(function(result) {
        // Handle server response (see Step 4)
        result.json().then(function(json) {
          console.log(json);
        })
      });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('hello');
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });

    stripePaymentMethodHandler(payload);
  };

  /* eslint-disable react/prop-types */

  /* eslint-disable react/destructuring-assignment */

  return (
    <div style={{ width: '100%',  }}>
      <CurrencyFormat
        value={cart.reduce((acc, curr) => (acc + curr.price), 0)}
        renderText={(value) => (
          <>
            <p>
              Subtotal (
              {`${cart?.length} `}
              items):
              <strong>
                {` ${value}`}
              </strong>
            </p>
          </>
        )}
        decimalValue={2}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
    <h3>Confirmaiton Number #</h3>
    </div>
  );
};

export default SplitForm;
