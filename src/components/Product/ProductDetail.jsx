/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const {
    id,
    title,
    price,
    images,
    location,
    condition,
    supplierID,
    sliderLength,
    setOpen,
  } = props;
  // const products = useSelector((state) => state.products.homepage);
  // console.log(products);
  const [activeIdx, setActiveIdx] = useState(0);
  const dispatch = useDispatch();
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];

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
    setOpen(false);
  };

  return (
    <div className="product__detail">
      <div className="big-img">
        <img className="main__image" src={images[activeIdx]} alt="" />
      </div>

      <div className="box">
        <div className="row">
          <h3>{title}</h3>
          <span style={{ fontWeight: 'bold', margin: '20px 0' }}>Price ($ USD): </span>
          <span>{`$${price}`}</span>
        </div>
        <div className="colors">
          <span style={{ fontWeight: 'bold' }}>Colors:</span>
          {colors.map((color) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <button type="button" disabled style={{ background: color, borderRadius: '999999px' }} key={uuidv4()}> </button>
          ))}
        </div>

        <p style={{ fontFamily: 'Verdana' }}>
          <span style={{ fontWeight: 'bold' }}>Description: </span>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {props?.description ?? 'No description available'}
        </p>
        <p style={{ fontFamily: 'Verdana' }}>
          <span style={{ fontWeight: 'bold' }}>Condition: </span>
          {condition}
        </p>

        <div className="thumb">
          {images.map((img, idx) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img src={img} alt="Thumb" key={uuidv4()} onClick={(e) => setActiveIdx(idx)} />
          ))}
        </div>
        <button type="button" className="detail__cart" onClick={addToCart}> Add to cart </button>
      </div>
    </div>
  );
};
export default ProductDetail;
