const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('payment', {
    paymentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paymentType: {
      type: DataTypes.STRING,
    },
    allowed: {
      type: DataTypes.BOOLEAN,
    },
  });
};
