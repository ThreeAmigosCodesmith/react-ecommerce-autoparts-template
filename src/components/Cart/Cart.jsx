/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Subtotal from '../Subtotal/Subtotal';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h2 className="cart__title">Your Shopping Cart</h2>
          <div className="cart__items">
            {cart.map((item) => (
              <CartProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                location={item.location}
                condition={item.condition}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
