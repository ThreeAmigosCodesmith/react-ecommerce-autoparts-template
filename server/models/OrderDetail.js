const Sequelize = require('sequelize');
const db = require('../config/database');

const OrderDetail = db.define('orderDetail', {
  orderId: {
    type: Sequelize.STRING,
  },
  productId: {
    type: Sequelize.STRING,
  },
  orderNumber: {
    type: Sequelize.NUMBER,
  },
  price: {
    type: Sequelize.NUMBER,
  },
  quantity: {
    type: Sequelize.NUMBER,
  },
  discount: {
    type: Sequelize.NUMBER,
  },
  total: {
    type: Sequelize.NUMBER,
  },
  idsku: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
  },
  shipDate: {
    type: Sequelize.DATE,
  },
  orderDetailId: {
    type: Sequelize.STRING,
  },
  billDate: {
    type: Sequelize.DATE,
  },
});

module.exports = OrderDetail;
