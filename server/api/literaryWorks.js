const bcrypt = require('bcrypt')
const { renderLiterary, renderAllLiterary } = require('./../views/LiteraryWorks')

module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash   
            const { filename } = req.file
            console.log('filed ', filename)
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
                    author_id: req.body.author_id,
                    locality_id: req.body.locality_id,
                    borrowed: false,
                    file: filename
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json({ message: err, status: "um erro" }))
        })
    }

    const list = (req, res) => {
        app.db('literaryWorks')
            .select('*')
            .then(esta => renderAllLiterary(app, esta, res))
            .catch(err => res.json(err))
    }

    const listOne = async (req, res) => {
        await app.db('literaryWorks')
            .where({ id: req.params.id })
            .first()
            .then(user => renderLiterary(app, user).then( literary => res.json(literary)) )
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        const { filename } = req.file
        await app.db('literaryWorks')
            .where({ id: req.params.id })
            .update({
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
                file: filename
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const del = async (req, res) => {
        await app.db('literaryWorks')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "deletado" }))
            .catch(err => res.status(400).json(err))
    }

    return { save, list, listOne, update, del }
}

