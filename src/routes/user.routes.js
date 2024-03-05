const express = require('express')
const { recuperarListaRecargasCliente } = require('../dbQuerys/recargas')
const { crearUsuario, iniciarSesion } = require('../dbQuerys/usuarios')
const Routes = express.Router()

Routes.post('/api/user/crearCuenta', async (req, res) => {
    const { nombres, apellidos, cedula, fechaDeNacimiento, genero, direccion, correo, telefono, rol, nombre_usuario, contraseña } = req.body

    const usuario = await crearUsuario({ nombres, apellidos, cedula, fechaDeNacimiento, genero, direccion, correo, telefono, rol, nombre_usuario, contraseña })

    console.log(usuario)

    if (usuario instanceof Error) {
        res.status(400).json({
            name: usuario.name,
            message: usuario.message
        })
        return
    }

    res.status(200).json(usuario)
})

Routes.post('/api/user/iniciarSesion', async (req, res) => {
    const { nombre_usuario, contraseña } = req.body

    const usuario = await iniciarSesion({nombre_usuario, contraseña})

    if(usuario instanceof Error){
        res.status(400).json({
            name: usuario.name,
            message: usuario.message
        })
        return
    }

    res.status(200).json(usuario)
})

module.exports = Routes