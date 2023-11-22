const { Sequelize } = require('sequelize')
const {connectionString} = require("pg/lib/defaults");

// Database
const sequelize = new Sequelize(
    process.env.DB_CONNECTION_STRING,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
