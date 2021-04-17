const { models: { product } } = require('../models/index');

async function getProduct(req, res, next) {
  const { productId } = req.params;

  await product.findOne({
    where: {
      productId,
    },
  })
    .then((data) => {
      res.locals.product = data;
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
  const { id } = req.params;
  console.log('getting inventory', id);
  await product.findAll({
    where: {
      supplierID: id,
    },
  })
    .then((products) => {
      console.log('products', products);
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
    title, make, model, year, description, price, images, condition,
  } = req.body;
  // eslint-disable-next-line no-console
  console.log(req.body);
  const sellerID = req.cookies.ssid;

  await product.create({
    productName: title,
    make,
    model,
    year,
    productDescription: description,
    condition,
    price,
    sellerID,
    images,
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
    .then((data) => {
      res.locals.productupdated = data;
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
    .then((data) => {
      res.locals.deletedproduct = data;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllProducts(req, res, next) {
  try {
    const products = await product.findAll();
    res.locals.products = products;

    return next();
  } catch (err) {
    res.locals.err = err;
    return next();
  }
}

async function getHomepageProducts(req, res, next) {
  try {
    const products = await product.findAll({ limit: 9 });
    res.locals.products = products;

    return next();
  } catch (err) {
    res.locals.err = err;
    return next();
  }
}

module.exports = {
  getProduct,
  getAllProducts,
  getProductsByUserId,
  getAllProductsByUser,
  createProduct,
  updateProduct,
  deleteProduct,
  getHomepageProducts,
};
