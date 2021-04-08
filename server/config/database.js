const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.CONNECTION_STRING || 'postgres://epbidatr:eCOCgYtbWofU0n9G07NFS1vxa-ulPXEh@queenie.db.elephantsql.com:5432/epbidatr', {
  dialect: 'postgres',
});
