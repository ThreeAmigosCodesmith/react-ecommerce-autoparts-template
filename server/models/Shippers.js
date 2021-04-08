const Sequelize = require('sequelize');
const db = require('../config/database');

const Shipper = db.define('shipper', {
  shipperId: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.NUMBER,
  },
});

module.exports = Shipper;
