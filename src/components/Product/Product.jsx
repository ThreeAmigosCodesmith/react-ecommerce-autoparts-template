import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';

const Product = (props) => {
  const {
    title,
    price,
    image,
    location,
    condition,
  } = props;

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
      <button type="button">Add to Basket</button>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};

export default Product;
