const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('shipper', {
    shipperId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  });
};
