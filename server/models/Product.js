const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    year: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    sku: {
      type: DataTypes.STRING,
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
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    note: {
      type: DataTypes.TEXT,
    },
  });
};
