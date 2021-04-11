import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './CartProduct.css';
import { useSelector, useDispatch } from 'react-redux';

const CartProduct = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const {
    id,
    title,
    price,
    image,
    location,
    condition,
  } = props;

  const deleteItem = () => {
    // eslint-disable-next-line no-console
    console.log(cart);

    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };

  return (
    <div className="cartProduct">
      <div className="cartProduct__image">
        <img src={image} alt="" />
      </div>
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="cartProduct__condition">{`Condition: ${condition}`}</p>
        <p className="cartProduct__location">
          <LocationOnIcon />
          <span>{location.borough}</span>
        </p>
        <button type="button" onClick={deleteItem}>Remove from Cart</button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};

export default CartProduct;
