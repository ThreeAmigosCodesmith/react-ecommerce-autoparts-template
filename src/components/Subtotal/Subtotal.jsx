import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => (
  <div className="subtotal">
    <CurrencyFormat
      value={0}
      renderText={() => (
        <>
          <p>
            Subtotal (0 items):
            <strong> 0</strong>
          </p>
        </>
      )}
      decimalValue={2}
      displayType="text"
      thousandSeparator="true"
      prefix="$"
    />
    <button type="button">Proceed to Checkout</button>
  </div>
);

export default Subtotal;
