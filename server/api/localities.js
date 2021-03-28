const bcrypt = require('bcrypt')

module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash

            app.db('localities')
                .insert({
                    hall: req.body.hall,
                    bookcase: req.body.bookcase,
                    shelf: req.body.shelf,
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json({message: err, status: "um erro"}))
        })
    }

    const list = (req, res) => {
        app.db('localities')
            .select('*')
            .then(esta => res.json(esta))
            .catch(err => res.json(err))
    }

    return { save, list }
}      

