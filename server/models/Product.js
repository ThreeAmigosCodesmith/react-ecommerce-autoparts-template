const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.DOUBLE,
    },
    unitsInStock: {
      type: DataTypes.INTEGER,
    },
    unitsOnOrder: {
      type: DataTypes.INTEGER,
    },
    productAvailable: {
      type: DataTypes.BOOLEAN,
    },
    discountAvailable: {
      type: DataTypes.BOOLEAN,
    },
    picture: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.TEXT,
    },
  });
};
