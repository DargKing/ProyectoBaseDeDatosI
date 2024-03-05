const { verificarToken, decodeToken } = require('../libs/tokens')

function comprobarTokenMiddleware(req, res, next) {
    let token = (req.body.token) ? req.body.token : req.query.token

    if (!verificarToken(token)) {
        res.status(403).json({
            message: "La sesion Expiro",
            name: "tokenExpired"
        })
    }

    req.body.sesion = decodeToken(token)
    next()
}

module.exports = { comprobarTokenMiddleware }