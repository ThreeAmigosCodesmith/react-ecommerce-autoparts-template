const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

module.exports = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
});
