import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={basket.reduce((acc, curr) => (acc + curr.price), 0)}
        renderText={(value) => (
          <>
            <p>
              Subtotal (
              {`${basket?.length} `}
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
      <button type="button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
