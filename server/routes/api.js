/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');
const productController = require('../controllers/productController.js');
const orderController = require('../controllers/orderController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');

/* USER ROUTES */

router.get('/users/:userId', userController.getUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/users', userController.getUsers, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.users);
});

router.post('/verify', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else {
    console.log({ name: res.locals.name, _id: res.locals.userId });
    res.status(200).json({ name: res.locals.name, id: res.locals.userId });
  }
});

router.delete('/verify', cookieController.removeCookie, sessionController.stopSession, (req, res) => {
  res.status(200).json('Signed out successfully');
});

router.post('/users', userController.createUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else {
    console.log({ name: res.locals.name, id: res.locals.userId });
    res.status(200).json({ name: res.locals.name, id: res.locals.userId });
  }
});

router.patch('/users/:userId', userController.updateUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.userupdated);
});

router.delete('/users/:userId', userController.deleteUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the user' });
});

/* PRODUCT ROUTES */

router.get('/products/:userId', productController.getProductsByUserId, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/products/:orderId', productController.getProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.get('/products', productController.getAllProducts, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json({ products: res.locals.products });
});

router.get('/productsByUser/:id', productController.getAllProductsByUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.products);
});

router.post('/products', productController.createProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.patch('/products/:orderId', productController.updateProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.productupdated);
});

router.delete('/products/:orderId', productController.deleteProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

/* ORDER ROUTES */

router.get('/orders/:orderId', orderController.getOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.order);
});

router.get('/orders', orderController.getOrders, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orders);
});

router.get('/ordersByUser/:id', orderController.getAllOrdersByUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orders);
});

router.post('/orders', orderController.createOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.ordercreated);
});

router.patch('/orders/:orderId', orderController.updateOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.orderupdated);
});

router.delete('/orders/:orderId', orderController.deleteOrder, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

module.exports = router;
