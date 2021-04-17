const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {
    orderID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.DATE,
    },
    shipDate: {
      type: DataTypes.DATE,
    },
    requiredDate: {
      type: DataTypes.DATE,
    },
    freight: {
      type: DataTypes.STRING,
    },
    salesTax: {
      type: DataTypes.DOUBLE,
    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    transactStatus: {
      type: DataTypes.STRING,
    },
    errLoc: {
      type: DataTypes.STRING,
    },
    fulfilled: {
      type: DataTypes.BOOLEAN,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
    },
    paid: {
      type: DataTypes.BOOLEAN,
    },
    paymentDate: {
      type: DataTypes.DATE,
    },
  });
};
