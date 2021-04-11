/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const aws = require('aws-sdk');
const md5 = require('md5');

// const config = require('../s3config/index');

// eslint-disable-next-line prefer-destructuring
const S3_BUCKET = process.env.S3_BUCKET;
console.log(process.env.S3_BUCKET);
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();
// eslint-disable-next-line no-unused-vars
s3.listBuckets((err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    // console.log(data);
    // console.log('Success', data.Buckets);
    console.log('connected to S3 buckets');
  }
});
// rename a file
const renameImage = (file) => (
  `${md5(Date.now())}.${file.name.replace(/ /g, '-').split('.').pop()}`
);
// Upload your image to S3
const uploadToS3 = (file, res) => {
  s3.createBucket(() => {
    const params = {
      Bucket: S3_BUCKET,
      Key: renameImage(file),
      Body: file.data,
    };
    s3.upload(params, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
        res.status(422).send(err);
      }
      // return the S3's path to the image
      res.json(data.Location);
    });
  });
};

exports.uploadImage = (req, res) => {
  uploadToS3(req.files.photo, res);
};
