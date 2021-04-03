module.exports = app => {
    app.get('/', (req, res) => {
        res.send('API OK!')
    })

    // add for tests
    app.post('/students', app.api.students.save)
    app.get('/students', app.api.students.list)
    app.get('/students/:id', app.api.students.listOne)
    app.put('/students/:id', app.api.students.update)
    app.delete('/students/:id', app.api.students.del)

    app.post('/localities', app.api.localities.save)
    app.get('/localities', app.api.localities.list)

    app.post('/authors', app.api.authors.save)
    app.get('/authors', app.api.authors.list)

    app.post('/literaryWorks', app.api.literaryWorks.save)
    app.get('/literaryWorks', app.api.literaryWorks.list)

    app.post('/employees', app.api.employees.save)
    app.get('/employees', app.api.employees.list)

    app.post('/loans', app.api.loans.save)
    app.get('/loans', app.api.loans.list)
}