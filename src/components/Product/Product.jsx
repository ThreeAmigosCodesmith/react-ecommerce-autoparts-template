import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';
import { useStateValue } from '../../StateProvider';

const Product = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const {
    id,
    title,
    price,
    image,
    location,
    condition,
  } = props;

  const addToBasket = () => {
    // dispatch item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        location,
        condition,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{`Condition: ${condition}`}</p>
        <p className="product__location">
          <LocationOnIcon />
          <span>{location.borough}</span>
        </p>
      </div>
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <button type="button" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};

export default Product;
