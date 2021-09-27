const { authSecrets } = require('./../.env')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')

module.exports = app => {
  const signinStudent = async (req, res) => {
    if( !req.body.pass && !req.body.cpf) {
      return res.status(400).send("Dados incompletos!")
    }

    const user = await app.db('students')
      .where( {cpf: req.body.cpf} )
      .first()

    if(user){
      bcrypt.compare(req.body.pass, user.pass, (erro, isMath) => {
        if(erro || !isMath){
          return res.status(401).send("Senha incorreta ou erro")
        }

        const payload = { id: user.id, admin: false }
        res.json({
          cpf: user.cpf,
          token: jwt.encode(payload, authSecrets)
        })

      })
    }else {
      return res.status(401).send("Usuario não cadastrado!")
    }
  }

  return { signinStudent }
}
