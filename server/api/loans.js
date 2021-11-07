const bcrypt = require('bcrypt')
const { setLoans } = require('./../utils/loans')
const { renderLoan, renderAllLoan } = require('./../views/Loans')
const { devolver } = require('./../utils/getData')

module.exports = app => {

  const save = async (req, res) => {
    app.db('loans')
      .select('*')
      .where({ student_id: req.body.student_id })
      .then(loans => {
        if (loans.length < 5) {
          setLoans(app, req, res)
        }
        else {
          // console.log('cheio')
          return res.status(401).json({
            message: 'Limite de empréstimo atingido '
          })
        }
      })
      .catch(err => res.json(401).json(err))
  }

  const list = (req, res) => {
    app.db('loans')
      .select('*')
      .orderBy('student_id')
      .then(loans => {
        if (!loans.length) res.send('Vazio')
        renderAllLoan(app, loans, res)
      })
      .catch(err => res.json(err))
  }

  const listMyloans = (req, res) => {
    app.db('loans')
      .select('*')
      .where({ student_id: req.user.id })
      .then(loans => {
        if (!loans.length) res.send('Vazio')
        renderAllLoan(app, loans, res)
      })
      .catch(err => res.status(401).json(err))
  }

  const listOne = async (req, res) => {
    await app.db('loans')
      .where({ id: req.params.id })
      .first()
      .then(loans => {
        if (loans.length) res.send('Vazio')
        renderLoan(app, loans).then(loan => res.json(loan))
      })
      .catch(err => res.status(400).json(err))
  }

  const update = async (req, res) => {
    await app.db('loans')
      .where({ id: req.params.id })
      .update({
        loanDate: req.body.loanDate,
        returnDate: req.body.returnDate,
        student_id: req.body.student_id,
        // employees_id: req.user.id,
        literaryWorks_id: req.body.literaryWorks_id,
      })
      .then(_ => res.status(204).send())
      .catch(err => res.status(400).json(err))
  }

  const renovation = async (req, res) => {
	  // console.log('tentou', req.params.id)
    await app.db('loans')
      .where( { id: req.params.id } )
      .first()
      .then( async loan => {
        if(loan.renovations < 3){
          // console.log('renovando ', loan)
          await app.db('loans')
          .where( { id: req.params.id } )
          .update({
            renovations: loan.renovations + 1,
            returnDate: devolver()
          }).then( _ => res.status(204).send('ok'))
        }else {
          res.status(404).json({message : 'Limite de empréstimo atingido'})
        }
      })
  }

  const del = async (req, res) => {
    const idLiterary = await app.db('loans').where({ id: req.params.id })
    await app.db('loans')
      .where({ id: req.params.id })
      .delete()
      .then(user => {
        app.db('literaryWorks')
          .where({ id: idLiterary[0].literaryWorks_id })
          .update({ borrowed: false })
          .then(inserido => res.json({ OK: inserido, message: "Deletado" }))
      })
      .catch(err => res.status(400).json(err))
  }

  return { save, list, listMyloans, listOne, update, renovation, del }
}

