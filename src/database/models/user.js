// src/database/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
  chat_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  subscription_type: {
    type: DataTypes.STRING,
  },
  subscription_status: {
    type: DataTypes.STRING,
    defaultValue: 'активна',
  },
}, {
  timestamps: true,
});

module.exports = User;
