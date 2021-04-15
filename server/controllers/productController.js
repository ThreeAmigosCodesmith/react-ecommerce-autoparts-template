const { models: { product } } = require('../models/index');

async function getProduct(req, res, next) {
  const { productId } = req.params;

  await product.findOne({
    where: {
      productId,
    },
  })
    .then((prod) => {
      res.locals.product = prod;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllProducts(req, res, next) {
  await product.findAll()
    .then((products) => {
      res.locals.products = products;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getProductsByUserId(req, res, next) {
  const { userId } = req.params;

  await product.findOne({
    where: {
      supplierId: userId,
    },
  })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllProductsByUser(req, res, next) {
  await product.findAll({
    where: {
      supplierId: req.params.id,
    },
  })
    .then((products) => {
      res.locals.products = products;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function createProduct(req, res, next) {
  const {
    title, make, model, year, description, price, images,
  } = req.body;
  // eslint-disable-next-line no-console
  console.log(req.body);
  const sellerID = req.cookies.ssid;

  await product.create({
    title, make, model, year, description, price, sellerID, images,
  })
    .then((prod) => {
      res.locals.product = prod;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// // TODO: Needs fixing
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

  await product.findOneAndUpdate(bodyToUpdate, {
    where: {
      productId,
    },
  })
    .then((prod) => {
      res.locals.productupdated = prod;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params;

  await product.findOneAndDelete({
    where: {
      productId,
    },
  })
    .then((prod) => {
      res.locals.deletedproduct = prod;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

module.exports = {
  getProduct,
  getAllProducts,
  getProductsByUserId,
  getAllProductsByUser,
  createProduct,
  updateProduct,
  deleteProduct,
};
