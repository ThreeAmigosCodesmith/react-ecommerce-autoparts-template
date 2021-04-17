import React, { useMemo } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
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
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [success, setSuccess] = React.useState(false);
  const [confirm, setConfirm] = React.useState('');

  /* eslint-disable jsx-a11y/label-has-associated-control */

  /*eslint-disable*/

  let today  = new Date();

  let productIds = []

  console.log(user)

  for(let x = 0; x < cart.length; x++) {
    if(cart[x].id) {
      productIds.push(cart[x].id)
    }
  }

  const userId = user.customerID

  let orderDate =  today.toLocaleDateString("en-US")

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
          payment_amount: cart.reduce((acc, curr) => (acc + curr.price), 0),
          order: {orderDate: orderDate, productId: productIds, sellerId: '21651651adwsaw', buyerId: userId, amount: cart.reduce((acc, curr) => (acc + curr.price), 0)},
        }),
      }).then(function(result) {
        // Handle server response (see Step 4)
        result.json().then(function(json) {
          setSuccess(json.success)
          setConfirm(json.confirmation)
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
  let content= (
    <div style={{ height: '100%', }}>
    <CurrencyFormat
      value={cart.reduce((acc, curr) => (acc + curr.price), 0)}
      renderText={(value) => (
        <>
          <p>
            Subtotal (
            {`${cart?.length} `}
            item(s)):
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
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  </div>
  )
  if(success) {
    content = (
    <div style={{ height: '100%', display:'flex', justifyContent: 'space-evenly', alignItems:'space-between' , flexDirection: 'column' }}>
      <CurrencyFormat
        value={cart.reduce((acc, curr) => (acc + curr.price), 0)}
        renderText={(value) => (
          <>
            <p>
              Subtotal (
              {`${cart?.length} `}
              item(s)):
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
      <h3 style={{color:'green'}}>Payment Successful!</h3>
      <h3 style={{color:'blue'}}>Confirmation Number : <h4 style={{color:'black'}}>{confirm}</h4></h3>
    </div>
    )
  }

  return (
  <div style={{ width: '100%' }}>
        {content}
  </div>
  );
};

export default SplitForm;
