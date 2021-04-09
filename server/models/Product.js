const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
    },
    idsku: {
      type: DataTypes.STRING,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    quantityPerUnit: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.DOUBLE,
    },
    unitWeight: {
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
    currentOrder: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
    note: {
      type: DataTypes.TEXT,
    },
  });
};
