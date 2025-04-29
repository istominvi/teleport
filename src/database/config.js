const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teleport_db', 'teleport_user', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
