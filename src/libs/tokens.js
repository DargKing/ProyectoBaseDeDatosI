const jwt = require('jsonwebtoken')

const verificarToken = (token) => {
    const res = jwt.verify(token, process.env.JWT_KEY)

    if(res instanceof Error){
        return false
    }

    return res
}

const crearToken = (data) => {
    const token = jwt.sign(data, process.env.JWT_KEY)

    return token
}

const decodeToken = (token) => {
    const data = jwt.decode(token, process.env.JWT_KEY)

    if(data instanceof Error){
        return false        
    }

    return data
}

module.exports = { decodeToken, verificarToken, crearToken }