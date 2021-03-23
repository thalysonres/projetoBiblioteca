const path = require('path')

module.exports = {

    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname,  './database/database.sqlite3')
    }
    // client: 'pg',
    // connection: {
    //   host : '127.0.0.1',
    //   user : 'postgres',
    //   password : '123456',
    //   database : 'sqlite3'
    // }
};
