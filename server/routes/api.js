/* eslint-disable no-console */
const express = require('express');
const faker = require('faker');

const router = express.Router();

// const { models: { product } } = require('../models/index');

// const products = []

// for(let i = 0; i < 9; i += 1) {

// }

// console.log(faker.vehicle.manufacturer()

// product.create({
//   productName: 'BUMPER',
//   productDescription: 'Used bumper',
//   color: 'red',
//   discount: 0.00,
//   unitsInStock: 1,
//   unitsOnOrder: 0,
//   productAvailable: true,
//   discountAvailable: false,
//   note: 'this is a cool bumper!',
//   categoryID: 'de804ad0-8e22-471f-b8bc-6d26f8d4fe95',
//   supplierID: 'd0713365-0bde-4cf4-a4f8-f7c4ed1ed3e4',
//   vehicleID: '6ee89b29-957e-45c2-865f-42812df646bf',
// });

router.use('/users', require('./user'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/chat', require('./chat'));

module.exports = router;
