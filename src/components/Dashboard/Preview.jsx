/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Preview = () => {
  const [thumb, setThumb] = useState(undefined);
  const [loading, isLoading] = useState(false);
  const file = useSelector((state) => state.image.file);

  // useEffect(() => {
  //   isLoading(true);
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     isLoading(false);
  //     setThumb(reader.result);
  //   };
  //   reader.readAsDataURL(reader.result);
  // }, [file]);

  return (
    <div className="row">
      <div className="col-md-12">
        {loading ? <img src={thumb} alt={file.name} className="img-thumbnail" /> : null }
      </div>
    </div>
  );
};

export default Preview;
