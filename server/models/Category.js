const Sequelize = require('sequelize');
const db = require('../config/database');

const Category = db.define('category', {
  categoryId: {
    type: Sequelize.NUMBER,
  },
  catgoryName: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Category;
