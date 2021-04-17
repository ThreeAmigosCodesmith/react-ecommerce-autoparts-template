/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import { useDispatch } from 'react-redux';
import { Input } from '@material-ui/core';
import Preview from './Preview';
import * as types from '../../redux/actions/actionTypes';
import aws from '../../apiKeys';
import './UploadImages.css';

const UploadImage = () => {
  const dispatch = useDispatch();

  const handleUpload = async (image) => {
    uploadFile(image, aws.aws)
      .then((data) => {
        const imgUrl = data.location;
        dispatch({
          type: types.ADD_IMAGE_URL,
          url: imgUrl,
        });
      })
      .catch((err) => console.error(err));
  };

  const upload = async (e) => {
    const allFiles = e.target.files;
    // eslint-disable-next-line no-restricted-syntax
    for (let i = 0; i < allFiles.length; i += 1) {
      const file = allFiles[i];
      // eslint-disable-next-line no-await-in-loop
      await handleUpload(file, aws.aws);
      e.target.files = null;
    }
  };

  return (
    <div className="upload_img">
      <h3 id="form__container">Pictures:</h3>
      <Input type="file" inputProps={{ multiple: true }} onChange={upload} />
      <Preview />
    </div>
  );
};

export default UploadImage;
