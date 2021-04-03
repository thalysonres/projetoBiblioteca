const { authSecrets } = require('./../.env')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')

module.exports = app => {
    const signinEmployees = async (req, res) => {
        if(!req.body.pass && !req.body.cpf){
            return res.status(400).send('Dados incompletos')
        }

        const employees = await app.db('employees')
                            .where( {cpf: req.body.cpf} )
                            .first()
        
        if(employees){
            bcrypt.compare(req.body.pass, employees.pass, (erro, isMath) => {
                if(erro || !isMath){
                    return res.status(401).send("Senha incorreta ou erro")
                }

                const payload = { id: employees.id, admin: true }
                res.json({
                    name: employees.name,
                    cpf: employees.cpf,
                    token: jwt.encode(payload, authSecrets)
                })
            })
        }else {
            res.status(401).send("Usuario não cadastrado!")
        }
    }

    return { signinEmployees }

}