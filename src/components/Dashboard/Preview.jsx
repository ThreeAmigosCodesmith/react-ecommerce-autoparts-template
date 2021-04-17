/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { DELETE_IMAGE_URL } from '../../redux/actions/actionTypes';
import './Preview.css';

const Preview = () => {
  const [thumb, setThumb] = useState(undefined);
  const file = useSelector((state) => state.image.imageUrls);
  const dispatch = useDispatch();

  const deleteImg = (e) => {
    const imgIndex = file.indexOf(e.target.src);
    dispatch({
      type: DELETE_IMAGE_URL,
      index: imgIndex,
    });
  };

  return (
    <div className="img_container">
      {file.map((img) => <img src={img} key={uuidv4()} alt={thumb} className="img-thumbnail" onClick={deleteImg} />)}
    </div>
  );
};

export default Preview;
