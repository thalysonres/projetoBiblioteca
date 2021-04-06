const express = require('express')
const cors = require('cors')
const path = require('path')

module.exports = app => {
    app.use( express.json() )
    app.use( cors( {
        origin: '*'
    } ) )
    app.use('/uploads', express.static( path.resolve(__dirname, '..', 'uploads') ) )
}