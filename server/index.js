const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

require('dotenv').config()

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/passport.js')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen( process.env.PORT, () => console.log('Server OK!') )