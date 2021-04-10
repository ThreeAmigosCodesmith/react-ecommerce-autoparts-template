/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
// import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, response } from '../../redux/actions/imageActions';
// import Preview from './preview';

const UploadImage = () => {
  const [image, getImageUrl] = useState('');
  const [loading, loadingImage] = useState(false);
  const dispatch = useDispatch();
  const awsS3imageUrl = useSelector((state) => state.image.aws_s3_image_url);
  const message = useSelector((state) => state.image.msg);
  const type = useSelector((state) => state.image.type);

  useEffect(() => {
    response('', '');

    if (image === awsS3imageUrl) {
      loadingImage(false);
    }
  }, [loading]);

  const uploadToS3 = (e) => {
    e.preventDefault();
    loadingImage(true);
    const formData = new FormData();
    formData.append('photo', image);
    uploadImage(formData);
  };

  const closeAlert = (e) => {
    e.preventDefault();
    dispatch(response('', ''));
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <h3>
            Upload Photos
          </h3>
        </div>
      </div>
      <div className="col-md-12">
        <div className="upload-btn-wrapper mb-2">
          <button type="submit" className="upload-btn bg-primary text-white">Choose Photo...</button>
          <input
            name="image"
            onChange={(e) => (getImageUrl(e.currentTarget.files[0]))}
          />
        </div>
      </div>
      <div className="col-md-12">
        {/* <Preview file={image} /> */}
      </div>
      {image
        ? (
          <div className="col-md-12">
            <button type="submit" className="upload-button" onClick={uploadToS3}>{ loading ? 'Uploading...' : 'Upload To AWS S3' }</button>
          </div>
        )
        : null}
      {message
        ? (
          <div className="col-lg-12 col-md-12 ">
            <div className={`alert ${type} alert-dismissible mt-3`}>
              <button type="button" className="close" onClick={closeAlert} data-dismiss="alert" aria-label="close">&times;</button>
              <span dangerouslySetInnerHTML={{ __html: message }} />
            </div>
          </div>
        )
        : null }
    </div>
  );
};

export default UploadImage;
