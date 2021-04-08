const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
});
