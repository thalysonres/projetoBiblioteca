const bcrypt = require('bcrypt')
const { getDateNow } = require('./../utils/getData')
const { renderStudent, renderAllStudent } = require('./../views/Students')
const { removeDots } = require('./../utils/cpfDot')

module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }
    
    const save = (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash

            app.db('students')
                .insert({
                    name: req.body.name,
                    phone: req.body.phone,
                    street: req.body.street,
                    district: req.body.district,
                    city: req.body.city,
                    state: req.body.state,
                    cpf: removeDots(req.body.cpf),
                    pass: password,
                    birthDate: req.body.birthDate,
                    regDate: getDateNow(),
                    employees_id: req.user.id, //id automatico
                })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json({ message: err, status: "um erro" }))
        })
    }

    const list = async (req, res) => {
        await app.db('students')
            .select('*')
            .then(students => {
                if(!students.length) res.send('Vazio :( ')
                renderAllStudent(app, students, res)
            })
            .catch(err => res.json(err))
    }

    const listOne = (req, res) => {

        app.db('students')
            .where({ id: req.params.id })
            .first()
            .then(student => {
                if(student.length) res.send(':( ')
                renderStudent(app, student).then(user => res.status(200).json(user))
            })
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash
            
            app.db('students')
                .where({ id: req.params.id })
                .update({
                    name: req.body.name,
                    phone: req.body.phone,
                    street: req.body.street,
                    district: req.body.district,
                    city: req.body.city,
                    state: req.body.state,
                    cpf: req.body.cpf,
                    pass: password,
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    const del = async (req, res) => {
        await app.db('students')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "deletado" }))
            .catch(err => res.status(400).json(err))
    }

    return { save, list, listOne, update, del }
}