const express = require('express');
const stripeController = require('../controllers/stripeController');
const orderController = require('../controllers/orderController');

const router = express.Router();
router.post('/', orderController.createOrder, stripeController.processPayment);

module.exports = router;
