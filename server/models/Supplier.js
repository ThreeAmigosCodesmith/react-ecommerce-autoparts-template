const Sequelize = require('sequelize');
const db = require('../config/database');

const Supplier = db.define('supplier', {
  supplierId: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  contactFirstName: {
    type: Sequelize.STRING,
  },
  contactLastName: {
    type: Sequelize.STRING,
  },
  contactTitle: {
    type: Sequelize.STRING,
  },
  address1: {
    type: Sequelize.STRING,
  },
  address2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  postalCode: {
    type: Sequelize.NUMBER,
  },
  country: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.NUMBER,
  },
  fax: {
    type: Sequelize.NUMBER,
  },
  email: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  paymentMethods: {
    type: Sequelize.STRING,
  },
  discountAvailable: {
    type: Sequelize.BOOLEAN,
  },
  discountType: {
    type: Sequelize.STRING,
  },
  typeGoods: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT,
  },
  currentOrder: {
    type: Sequelize.STRING,
  },
  logo: {
    type: Sequelize.STRING,
  },
  customerId: {
    type: Sequelize.STRING,
  },
  sizeUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = Supplier;
