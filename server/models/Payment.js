const Sequelize = require('sequelize');
const db = require('../config/database');

const Payment = db.define('payment', {
  paymentId: {
    type: Sequelize.STRING,
  },
  paymentType: {
    type: Sequelize.STRING,
  },
  allowed: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Payment;
