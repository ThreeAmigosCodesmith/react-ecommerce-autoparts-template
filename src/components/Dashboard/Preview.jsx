/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Preview.css';

const Preview = () => {
  const [thumb, setThumb] = useState(undefined);
  const file = useSelector((state) => state.image.imageUrls);

  return (
    <>
      {file.map((img) => <img src={img} alt={thumb} className="img-thumbnail" />)}
    </>
  );
};

export default Preview;
