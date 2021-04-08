const Sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('order', {
  orderId: {
    type: Sequelize.NUMBER,
  },
  customerId: {
    type: Sequelize.NUMBER,
  },
  orderNumber: {
    type: Sequelize.NUMBER,
  },
  paymentId: {
    type: Sequelize.STRING,
  },
  orderDate: {
    type: Sequelize.DATE,
  },
  shipDate: {
    type: Sequelize.DATE,
  },
  requiredDate: {
    type: Sequelize.DATE,
  },
  shipperId: {
    type: Sequelize.STRING,
  },
  freight: {
    type: Sequelize.STRING,
  },
  salesTax: {
    type: Sequelize.NUMBER,
  },
  timestamp: {
    type: Sequelize.DATE,
  },
  transctStatus: {
    type: Sequelize.STRING,
  },
  errLoc: {
    type: Sequelize.STRING,
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
  },
  paid: {
    type: Sequelize.BOOLEAN,
  },
  paymentDate: {
    type: Sequelize.DATE,
  },
});

module.exports = Order;
