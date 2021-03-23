module.exports = app => {
    app.get('/', (req, res) => {
        res.send('API OK!')
    })

    // add for tests
    app.post('/students', app.api.students.save)
    app.get('/students', app.api.students.list)

}