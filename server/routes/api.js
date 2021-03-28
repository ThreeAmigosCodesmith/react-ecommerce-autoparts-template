const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');
const productController = require('../controllers/productController.js');
const orderController = require('../controllers/orderController.js');

router.get('/users/:userId', userController.getUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/users', userController.getUsers, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.users);
});

router.post('/users', userController.createUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.usercreated);
});

router.patch('/users/:userId', userController.updateUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.userupdated);
});

router.delete('/users/:userId', userController.deleteUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the user' });
});

router.get('/products/:userId', productController.getProductsByUserId);
router.get('/products/:orderId', productController.getProduct);
router.post('/products', productController.createProduct);
router.patch('/products/:orderId', productController.updateProduct);
router.delete('/products/:orderId', productController.deleteProduct);

router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrder);
router.post('/orders', orderController.createOrder);
router.patch('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
