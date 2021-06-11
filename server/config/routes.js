const multer = require('multer')

const admin = require('./admin')
const multerConfig = require('./../config/multer')

module.exports = app => {
    app.get('/', (req, res) => { res.send('API OK!') })
    app.post('/user', app.api.employees.save)

    app.post('/signin', app.api.authStudent.signinStudent)
    app.post('/signin2', app.api.authEmployees.signinEmployees)

    app.route('/students')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.students.list))
        .post(admin(app.api.students.save))

    app.route('/students/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.students.listOne))
        .put(admin(app.api.students.update))
        .delete(admin(app.api.students.del))

    app.route('/localities')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.localities.save))
        .get(admin(app.api.localities.list))

    app.route('/localities/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.localities.listOne))
        .put(admin(app.api.localities.update))
        .delete(admin(app.api.localities.del))

    app.route('/authors')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.authors.save))
        .get(admin(app.api.authors.list))

    app.route('/authors/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.authors.listOne))
        .put(admin(app.api.authors.update))
        .delete(admin(app.api.authors.del))

    app.route('/literaryWorks')
        .all(app.config.passport.authenticate())
        .post(multer(multerConfig).single('file'), admin(app.api.literaryWorks.save))
        .get(app.api.literaryWorks.list) // student

    app.route('/literaryWorks/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.literaryWorks.listOne))
        .put(multer(multerConfig).single('file'), admin(app.api.literaryWorks.update))
        .delete(admin(app.api.literaryWorks.del))

    app.route('/employees')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.employees.save))
        .get(admin(app.api.employees.list))

    app.route('/employees/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.employees.listOne))
        .put(admin(app.api.employees.update))
        .delete(admin(app.api.employees.del))

    app.route('/loans')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.loans.save))
        .get(admin(app.api.loans.list))

    app.route('/loans/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.loans.listOne))
        .put(admin(app.api.loans.update))
        .delete(admin(app.api.loans.del))

    app.route('/myloans')
        .all(app.config.passport.authenticate())
        .get(app.api.loans.listMyloans) // student
}