/* eslint-disable no-unused-vars */
const request = require('supertest');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const { models: { order } } = require('../models/index.js');

beforeAll(() => {
  const orders = Array(4).fill({
    date: Date.now(),
    productID: [uuidv4(), uuidv4()],
    sellecrID: uuidv4(),
    buyerID: uuidv4(),
  });

  order.bulkCreate(orders);
});

describe('orders controller', () => {
  describe('getOrders function', () => {

  });
});
