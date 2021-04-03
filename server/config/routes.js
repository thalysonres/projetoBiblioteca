module.exports = app => {
    app.get('/', (req, res) => { res.send('API OK!') })

    app.post('/signin', app.api.authStudent.signinStudent)
    app.post('/signin2', app.api.authEmployees.signinEmployees)

    app.route('/students')
        .all(app.config.passport.authenticate())
        .get(app.api.students.list)
        .post(app.api.students.save)
    
    app.route('/students/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.students.listOne)
        .put(app.api.students.update)
        .delete(app.api.students.del)

    app.route('/localities')
        .all(app.config.passport.authenticate())
        .post(app.api.localities.save)
        .get(app.api.localities.list)

    app.route('/localities/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.localities.listOne)
        .put(app.api.localities.update)
        .delete(app.api.localities.del)

    app.route('/authors')
        .all(app.config.passport.authenticate())
        .post(app.api.authors.save)
        .get(app.api.authors.list)

    app.route('/authors/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.authors.listOne)
        .put(app.api.authors.update)
        .delete(app.api.authors.del)

    app.route('/literaryWorks')
        .all(app.config.passport.authenticate())
        .post(app.api.literaryWorks.save)
        .get(app.api.literaryWorks.list)

    app.route('/literaryWorks/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.literaryWorks.listOne)
        .put(app.api.literaryWorks.update)
        .delete(app.api.literaryWorks.del)

    app.route('/employees')
        .all(app.config.passport.authenticate())
        .post(app.api.employees.save)
        .get(app.api.employees.list)

    app.route('/employees/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.employees.listOne)
        .put(app.api.employees.update)
        .delete(app.api.employees.del)

    app.route('/loans')
        .all(app.config.passport.authenticate())
        .post(app.api.loans.save)
        .get(app.api.loans.list)

    app.route('/loans/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.loans.listOne)
        .put(app.api.loans.update)
        .delete(app.api.loans.del)
}