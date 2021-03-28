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

            app.db('loans')
                .insert({
                    loanDate: req.body.loanDate,
                    returnDate: req.body.returnDate,
                    student_id: req.body.student_id,
                    employees_id: req.body.employees_id,
                    literaryWorks_id: req.body.literaryWorks_id,
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json({message: err, status: "um erro"}))
        })
    }

    const list = (req, res) => {
        app.db('loans')
            .select('*')
            .then(esta => res.json(esta))
            .catch(err => res.json(err))
    }

    return { save, list }
}      

