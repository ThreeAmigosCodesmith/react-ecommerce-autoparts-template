const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('customer', {
    customerID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    billingAddress: {
      type: DataTypes.STRING,
    },
    billingCity: {
      type: DataTypes.STRING,
    },
    billingRegion: {
      type: DataTypes.STRING,
    },
    billingPostalCode: {
      type: DataTypes.INTEGER,
    },
    billingCountry: {
      type: DataTypes.STRING,
    },
    shipAddress: {
      type: DataTypes.STRING,
    },
    shipCity: {
      type: DataTypes.STRING,
    },
    shipRegion: {
      type: DataTypes.STRING,
    },
    shipPostalCode: {
      type: DataTypes.INTEGER,
    },
    shipCountry: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
};
