const bcrypt = require('bcrypt')
const { getDateNow, devolver } = require('./../utils/getData')
const { renderLoan, renderAllLoan } = require('./../views/Loans')

module.exports = app => {

    const save = async (req, res) => {
        
        app.db('loans')
            .insert({
                loanDate: getDateNow('i'),
                returnDate: devolver(),
                student_id: req.body.student_id,
                employees_id: req.user.id, // id auto
                literaryWorks_id: req.body.literaryWorks_id,
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json({ message: err, status: "um erro" }))
    }

    const list = (req, res) => {
        console.log('chegou')
        app.db('loans')
            .select('*')
            .then(esta => renderAllLoan(app, esta, res))
            .catch(err => res.json(err))
    }

    const listMyloans = (req, res) => {
        app.db('loans')
            .select('*')
            .where({ student_id: req.user.id })
            .then(loans =>  renderAllLoan(app, loans, res)) 
            .catch(err => res.status(401).json(err))
    }

    const listOne = async (req, res) => {
        await app.db('loans')
            .where({ id: req.params.id })
            .first()
            .then(user => renderLoan(app, user).then(loan => res.json(loan)))
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

    const del = async (req, res) => {
        await app.db('loans')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "deletado" }))
            .catch(err => res.status(400).json(err))
    }

    return { save, list, listMyloans, listOne, update, del }
}

