const path = require('path')
require('dotenv').config()
module.exports = {
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, './database/database.sqlite3')
    }
  },
  postgres: {
    client: 'pg',
    connection: {
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASS_DB,
      database: process.env.DATA_DB
    }
  }
};
