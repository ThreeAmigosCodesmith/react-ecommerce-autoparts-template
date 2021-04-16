/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Subtotal = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);

  const history = useHistory();

  const validateCheckOut = () => {
    if (cart.length < 1) return false;
    return true;
  };

  const checkoutButton = (event) => {
    event.preventDefault();
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: moment.now(),
        productId: ['0000000000'],
        sellerId: '0934977284',
        buyerId: user.id,
      }),
    }).then((res) => {
      if (res.status === 200) history.push('/confirmation');
    })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  return (
    <div className="subtotal">
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
      <Link to={{ pathname: '/stripe' }}>
        <button type="button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;
