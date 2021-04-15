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
    price: {
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
    condition: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.TEXT,
    },
  });
};
