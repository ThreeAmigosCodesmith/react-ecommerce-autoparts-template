/* eslint-disable global-require */
const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { applyAssociations } = require('./associations');

/* Initialize database */
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  /* Log DB interactions to dbLog.txt file */
  logging: (data) => {
    const timestamp = new Date().toString();
    fs.appendFileSync(
      path.resolve('./dbLog.txt'),
      `${timestamp}\n\n${data}\n\n\n\n`, 'UTF-8',
      { flags: 'w+' },
    );
  },
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
  require('./Vehicles'),
  require('./Chat'),
];

/* Initialize each model on the database  */
models.forEach((model) => model(sequelize));

/* Apply associations - adds foreign keys that can be used to joing tables */
applyAssociations(sequelize);

module.exports = sequelize;
