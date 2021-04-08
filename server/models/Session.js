const Sequelize = require('sequelize');
const db = require('../config/database');

const Session = db.define('customer', {
  cookieId: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Session;
