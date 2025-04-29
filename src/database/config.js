const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teleport_db', 'teleport_user', 'P-335678-p', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
