const { ObjectId } = require('bson');
const Product = require('../models/productModel');

async function getProduct(req, res, next) {
  const { productId } = req.params;

  await Product.find({ _id: ObjectId(productId) })
    .then((product) => {
      res.locals.product = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getProductsByUserId(req, res, next) {
  const { userId } = req.params;

  await Product.find({ sellerId: userId })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function createProduct(req, res, next) {
  const {
    name, make, model, year, imageLink, description, price, sellerId,
  } = req.body;

  await Product.create({
    name, make, model, year, imageLink, description, price, sellerId,
  })
    .then((product) => {
      res.locals.product = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// TODO: Needs fixing
async function updateProduct(req, res, next) {
  const { productId } = req.params;
  const {
    name, make, model, year, imageLink, description, price, sellerId,
  } = req.body;

  const bodyToUpdate = {
    ...(name && { name }),
    ...(make && { make }),
    ...(model && { model }),
    ...(year && { year }),
    ...(imageLink && { imageLink }),
    ...(description && { description }),
    ...(price && { price }),
    ...(sellerId && { sellerId }),
  };

  await Product.findOneAndUpdate({ _id: ObjectId(productId) }, bodyToUpdate)
    .then((product) => {
      res.locals.productupdated = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params;

  await Product.findOneAndDelete({ _id: ObjectId(productId) })
    .then((product) => {
      res.locals.deletedproduct = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

module.exports = {
  getProduct,
  getProductsByUserId,
  createProduct,
  updateProduct,
  deleteProduct,
};