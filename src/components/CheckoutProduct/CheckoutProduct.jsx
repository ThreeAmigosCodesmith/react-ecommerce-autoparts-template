import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = (props) => {
  const [{ basket }, dispatch] = useStateValue();

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
    console.log(basket);

    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} alt="" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__condition">{`Condition: ${condition}`}</p>
        <p className="checkoutProduct__location">
          <LocationOnIcon />
          <span>{location.borough}</span>
        </p>
        <button type="button" onClick={deleteItem}>Remove from Basket</button>
      </div>
    </div>
  );
};

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};

export default CheckoutProduct;
