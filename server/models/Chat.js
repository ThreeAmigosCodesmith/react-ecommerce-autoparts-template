const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('chat', {
    chatID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sender: {
      type: DataTypes.UUID,
    },
    chatSessionID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
    },
    fileUploadLink: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  });
};
