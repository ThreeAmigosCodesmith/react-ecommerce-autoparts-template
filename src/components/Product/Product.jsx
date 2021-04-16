<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 5465d80da90dfbf59385f1ca5533577b62bcc645
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';
import { useDispatch } from 'react-redux';

const Product = (props) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    images,
    location,
    condition,
<<<<<<< HEAD
    supplierID,
    sliderLength,
=======
>>>>>>> 5465d80da90dfbf59385f1ca5533577b62bcc645
  } = props;
  console.log(images);
  const addToCart = () => {
    // dispatch item to the data layer
    // eslint-disable-next-line no-console
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image: images[0],
        price,
        location,
        condition,
      },
    });
  };

<<<<<<< HEAD
  const messageSeller = () => {
    const chatSessionID = uuidv4();
    dispatch({
      type: actions.START_CHAT,
      payload: {
        supplierID,
        chatSessionID,
        productID: id,
        title,
      },
    });
  };

  const toggleSlider = (direction) => {
    if (sliderLength === 1) console.log('only one image');
    else if (direction === 'L') {
      if (currentImgIdx === 0) setCurrentImgIdx(sliderLength - 1);
      else setCurrentImgIdx((prevIdx) => prevIdx - 1);
    } else if (direction === 'R') {
      if (currentImgIdx === sliderLength - 1) setCurrentImgIdx(0);
      else setCurrentImgIdx((prevIdx) => prevIdx + 1);
    }
  };

=======
>>>>>>> 5465d80da90dfbf59385f1ca5533577b62bcc645
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
        <button type="button" className="slider-back-button" onClick={(e) => toggleSlider('L')}>
          &lt;
        </button>
        <div className="slider__image__container">
          <img src={images[currentImgIdx]} alt={title} />
        </div>
        <button type="button" className="slider-forward-button" onClick={(e) => toggleSlider('R')}>
          &gt;
        </button>
      </div>
      <button type="button" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
<<<<<<< HEAD
  location: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  supplierID: PropTypes.string,
  sliderLength: PropTypes.number.isRequired,
=======
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
>>>>>>> 5465d80da90dfbf59385f1ca5533577b62bcc645
};

export default Product;
