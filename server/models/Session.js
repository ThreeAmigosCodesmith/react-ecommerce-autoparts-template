const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('session', {
    cookieID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  });
};
