const Sequelize = require('sequelize');
const db = require('../config/database');

const Customer = db.define('customer', {
  customerId: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  class: {
    type: Sequelize.STRING,
  },
  room: {
    type: Sequelize.STRING,
  },
  building: {
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
  email: {
    type: Sequelize.STRING,
  },
  voiceMail: {
    type: Sequelize.NUMBER,
  },
  password: {
    type: Sequelize.STRING,
  },
  creditCard: {
    type: Sequelize.NUMBER,
  },
  billingAddress: {
    type: Sequelize.STRING,
  },
  billingCity: {
    type: Sequelize.STRING,
  },
  billingRegion: {
    type: Sequelize.STRING,
  },
  billingPostalCode: {
    type: Sequelize.NUMBER,
  },
  billingCountry: {
    type: Sequelize.STRING,
  },
  shipAddress: {
    type: Sequelize.STRING,
  },
  shipCity: {
    type: Sequelize.STRING,
  },
  shipRegion: {
    type: Sequelize.STRING,
  },
  shipPostalCode: {
    type: Sequelize.NUMBER,
  },
  shipCountry: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Customer;
