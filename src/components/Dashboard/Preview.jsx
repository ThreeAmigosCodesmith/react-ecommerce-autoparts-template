/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@material-ui/icons/Delete';
import { DELETE_IMAGE_URL } from '../../redux/actions/actionTypes';
import './Preview.css';

const Preview = () => {
  const [thumbs, setThumbs] = useState([]);
  const file = useSelector((state) => state.image.imageUrls);
  const dispatch = useDispatch();

  const deleteImg = (e) => {
    const imgIndex = e.target.id;
    console.log(imgIndex);
    dispatch({
      type: DELETE_IMAGE_URL,
      index: imgIndex,
    });
  };

  const renderImgs = () => {
    setThumbs(file.map((img, i) => (
      <div className="thumb-wrap">
        <img key={uuidv4()} src={img} id={i} alt={thumbs} className="img-thumbnail" />
        <DeleteIcon className="delete-button" id={i} onClick={(e) => deleteImg(e)} />
      </div>
    )));
  };

  useEffect(() => {
    renderImgs();
  }, [file]);

  return (
    <div className="img_container">
      {thumbs}
    </div>
  );
};

export default Preview;
