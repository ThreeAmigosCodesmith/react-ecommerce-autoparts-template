const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('session', {
    cookieId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  });
};
