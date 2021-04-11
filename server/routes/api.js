/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

router.use('/users', require('./user'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;
