/* eslint-disable global-require */
const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { applyAssociations } = require('./associations');

const logStream = fs.createWriteStream(path.resolve('server/dbLog.txt'));

const logToFile = (data) => {
  logStream.write(`${data}\n\n`);
};

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  logging: (data) => logToFile(data),
});

const models = [
  require('./Category'),
  require('./Customer'),
  require('./OrderDetail'),
  require('./Orders'),
  require('./Payment'),
  require('./Product'),
  require('./Session'),
  require('./Shippers'),
  require('./Supplier'),
];

models.forEach((model) => model(sequelize));

applyAssociations(sequelize);

module.exports = sequelize;
