/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../redux/actions/actionTypes';
>>>>>>> 677413cc54e7674a8d75608ad1fa657756b8f309

const Product = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    image,
    location,
    condition,
    supplierID,
  } = props;

  const addToCart = () => {
    // dispatch item to the data layer
<<<<<<< HEAD

=======
>>>>>>> 677413cc54e7674a8d75608ad1fa657756b8f309
    dispatch({
      type: actions.ADD_TO_CART,
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
        <img src={image} alt="" />
      </div>
      <button type="button" onClick={addToCart}>Add to Cart</button>
      <button type="button" onClick={messageSeller}>Message Seller</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  supplierID: PropTypes.string,
};

// supplierID.defaultProps = {
//   name: '',
// };

export default Product;
