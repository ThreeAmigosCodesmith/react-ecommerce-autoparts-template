const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('orderDetail', {
    price: {
      type: DataTypes.DOUBLE,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.DOUBLE,
    },
    total: {
      type: DataTypes.DOUBLE,
    },
    idsku: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    fulfilled: {
      type: DataTypes.BOOLEAN,
    },
    shipDate: {
      type: DataTypes.DATE,
    },
    orderDetailID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  });
};
