module.exports = app => {
    const save = (req, res) => {
        app.db('students')
            .insert({
                name: req.body.name, 
                phone: req.body.phone,
                street: req.body.street,
                district: req.body.district,
                city: req.body.city,
                state: req.body.state,
                cpf: req.body.cpf,
                pass: req.body.pass,
                birthDate: req.body.birthDate,
                regDate: req.body.regDate,
                employees_id: req.body.employees_id,
            })
        .then( _ => res.status(204).send() )
        .catch( err => res.status(400).json(err) )
    }

    const list = (req, res) => {
        app.db('students')
            .select('*')
            .then( esta => res.json(esta) )
            .catch(err => res.json(err))
    }

    return { save, list }
}