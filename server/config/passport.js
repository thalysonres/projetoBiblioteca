const { authSecrets } = require('./../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    
    const params = {
        secretOrKey: authSecrets,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    
    const strategy = new Strategy(params, (payload, done) => {
        app.db('students')
            .where({ id: payload.id })
            .first()
            .then( user => {
                if(user){
                    done(null, { id: user.id, cpf: user.cpf })
                }else {
                    done(null, false)
                }
            } )
            .catch(err => done(null, false))
    })

    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', {session: false})
    }
}