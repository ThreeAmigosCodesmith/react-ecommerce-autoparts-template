const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('vehicle', {
    vehicleID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
  });
};
