const bcrypt = require('bcrypt')
const { renderLiterary, renderAllLiterary } = require('./../views/LiteraryWorks')

module.exports = app => {

  const save = (req, res) => {

    const { filename } = req.file
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
  }

  const list = (req, res) => {
    app.db('literaryWorks')
      .select('*')
      .then(literary => {
        if(!literary.length) res.send('Vazio :( ')
        renderAllLiterary(app, literary, res)
      })
      .catch(err => res.json(err))
  }

  const listOne = async (req, res) => {
    await app.db('literaryWorks')
      .where({ id: req.params.id })
      .first()
      .then(literary => {
        if(literary.length) res.send('Vazio :( ')
        renderLiterary(app, literary).then(literary => res.json(literary))
      })
      .catch(err => res.status(400).json(err))
  }

  const update = async (req, res) => {
    if( req.file ){
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
    }else {
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
        })
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }
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

