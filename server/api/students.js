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

            app.db('students')
                .insert({
                    name: req.body.name,
                    phone: req.body.phone,
                    street: req.body.street,
                    district: req.body.district,
                    city: req.body.city,
                    state: req.body.state,
                    cpf: req.body.cpf,
                    pass: password,
                    birthDate: req.body.birthDate,
                    regDate: req.body.regDate,
                    employees_id: req.body.employees_id,
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json({message: err, status: "um erro"}))
        })
    }

    const list = (req, res) => {
        app.db('students')
            .select('*')
            .then(esta => res.json(esta))
            .catch(err => res.json(err))
    }

    return { save, list }
}