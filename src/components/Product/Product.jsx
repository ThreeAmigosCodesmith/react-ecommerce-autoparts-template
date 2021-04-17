/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import * as actions from '../../redux/actions/actionTypes';
import ProductDetail from './ProductDetail';

const classes = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'blue',
    border: '2px solid #000',
    padding: '2rem',
  },
};

const Product = (props) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    images,
    location,
    condition,
    supplierID,
    sliderLength,
  } = props;

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
          <span>{location}</span>
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

      <div className="button-group">
        <button type="button" onClick={messageSeller}>Message Seller</button>
        <button type="button" onClick={addToCart}>Add to Cart</button>
        <button type="button" className="product__details" onClick={handleOpen}>
          Product Details
        </button>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <ProductDetail
              id={id}
              title={title}
              price={price}
              images={images}
              location={location}
              condition={condition}
              supplierID={supplierID}
              sliderLength={sliderLength}
              setOpen={setOpen}
            />
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  supplierID: PropTypes.string,
  sliderLength: PropTypes.number.isRequired,
};

export default Product;
