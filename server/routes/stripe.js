const express = require('express');
const stripeController = require('../controllers/stripeController');

const router = express.Router();
router.post('/', stripeController.processPayment);

module.exports = router;
