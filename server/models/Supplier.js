const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('supplier', {
    supplierID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    contactFirstName: {
      type: DataTypes.STRING,
    },
    contactLastName: {
      type: DataTypes.STRING,
    },
    contactTitle: {
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
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    discountAvailable: {
      type: DataTypes.BOOLEAN,
    },
    discountType: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    logo: {
      type: DataTypes.STRING,
    },
  });
};
