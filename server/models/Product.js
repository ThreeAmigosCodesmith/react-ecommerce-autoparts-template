const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
  productId: {
    type: Sequelize.STRING,
  },
  sku: {
    type: Sequelize.STRING,
  },
  idsku: {
    type: Sequelize.STRING,
  },
  vendorProductId: {
    type: Sequelize.STRING,
  },
  productName: {
    type: Sequelize.STRING,
  },
  productDescription: {
    type: Sequelize.STRING,
  },
  supplierId: {
    type: Sequelize.STRING,
  },
  categoryId: {
    type: Sequelize.STRING,
  },
  quantityPerUnit: {
    type: Sequelize.NUMBER,
  },
  unitPerPrice: {
    type: Sequelize.NUMBER,
  },
  MSRP: {
    type: Sequelize.NUMBER,
  },
  availableSize: {
    type: Sequelize.STRING,
  },
  availableColors: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  discount: {
    type: Sequelize.NUMBER,
  },
  unitWeight: {
    type: Sequelize.NUMBER,
  },
  unitsInStock: {
    type: Sequelize.NUMBER,
  },
  unitsOnOrder: {
    type: Sequelize.NUMBER,
  },
  reorderLevel: {
    type: Sequelize.NUMBER,
  },
  productAvailable: {
    type: Sequelize.BOOLEAN,
  },
  discountAvailable: {
    type: Sequelize.BOOLEAN,
  },
  currentOrder: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  ranking: {
    type: Sequelize.NUMBER,
  },
  note: {
    type: Sequelize.TEXT,
  },
});

module.exports = Product;
