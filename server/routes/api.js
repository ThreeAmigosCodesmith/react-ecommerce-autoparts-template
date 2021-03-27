const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');
const productController = require('../controllers/productController.js');
const orderController = require('../controllers/orderController.js');

router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUser);
router.post('/users', userController.createUser);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

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
