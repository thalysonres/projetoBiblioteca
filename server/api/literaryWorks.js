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

            app.db('literaryWorks')
                .insert({
                    title: req.body.title,
                    edition: req.body.edition,
                    editionYear: req.body.editionYear,
                    numberPage: req.body.numberPage,
                    publishingComp: req.body.publishingComp,
                    publication: req.body.publication,
                    ISBN: req.body.ISBN,
                    CDD: req.body.CDD,
                    CDU: req.body.CDU,
                    translator: req.body.translator,
                    borrowed: req.body.borrowed,
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json({message: err, status: "um erro"}))
        })
    }

    const list = (req, res) => {
        app.db('literaryWorks')
            .select('*')
            .then(esta => res.json(esta))
            .catch(err => res.json(err))
    }

    return { save, list }
}      

