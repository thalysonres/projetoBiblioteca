const config = require('./../knexfile')
const knex = require('knex')(config.sqlite)

knex.migrate.latest([config]) // toda vez que starta o server cria as tabelas

module.exports = knex