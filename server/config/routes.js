module.exports = app => {
    app.get('/', (req, res) => {
        res.send('API OK!')
    })

    //signin
    app.post('/signin', app.api.authStudent.signinStudent)
    app.post('/signin2', app.api.authEmployees.signinEmployees)

    // Acessos do estudante
    app.route('/students')
        .all(app.config.passport.authenticate())
        .get(app.api.students.list)
    // app.post('/students', app.api.students.save)
    // app.get('/students/:id', app.api.students.listOne)
    // app.put('/students/:id', app.api.students.update)
    // app.delete('/students/:id', app.api.students.del)

    app.post('/localities', app.api.localities.save)
    app.get('/localities', app.api.localities.list)
    app.get('/localities/:id', app.api.localities.listOne)
    app.put('/localities/:id', app.api.localities.update)
    app.delete('/localities/:id', app.api.localities.del)

    app.post('/authors', app.api.authors.save)
    app.get('/authors', app.api.authors.list)
    app.get('/authors/:id', app.api.authors.listOne)
    app.put('/authors/:id', app.api.authors.update)
    app.delete('/authors/:id', app.api.authors.del)

    app.post('/literaryWorks', app.api.literaryWorks.save)
    app.get('/literaryWorks', app.api.literaryWorks.list)
    app.get('/literaryWorks/:id', app.api.literaryWorks.listOne)
    app.put('/literaryWorks/:id', app.api.literaryWorks.update)
    app.delete('/literaryWorks/:id', app.api.literaryWorks.del)

    app.post('/employees', app.api.employees.save)
    app.get('/employees', app.api.employees.list)
    app.get('/employees/:id', app.api.employees.listOne)
    app.put('/employees/:id', app.api.employees.update)
    app.delete('/employees/:id', app.api.employees.del)

    app.post('/loans', app.api.loans.save)
    app.get('/loans', app.api.loans.list)
    app.get('/loans/:id', app.api.loans.listOne)
    app.put('/loans/:id', app.api.loans.update)
    app.delete('/loans/:id', app.api.loans.del)
}