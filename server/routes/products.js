const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController.js');

/* PRODUCT ROUTES */

router.get('/homepage', productController.getHomepageProducts, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.products);
});

router.get('/:userId', productController.getProductsByUserId, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/:orderId', productController.getProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.get('/ByUser/:id', productController.getAllProductsByUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.products);
});

router.get('/', productController.getAllProducts, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.products);
});

router.post('/create', productController.createProduct, (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.patch('/:orderId', productController.updateProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.productupdated);
});

router.delete('/:orderId', productController.deleteProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

module.exports = router;
