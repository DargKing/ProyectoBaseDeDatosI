const express = require('express')
const { recuperarListaRecargasCliente, registrarRecargaCliente } = require('../dbQuerys/recargas')
const { comprobarTokenMiddleware } = require('./middlewares')
const Routes = express.Router()

Routes.get('/api/recargas/listaRecargasCliente/:cedula', comprobarTokenMiddleware, async (req, res) => {
    const { cedula } = req.params
    const { desde, hasta } = req.query

    if(req.body.sesion.rol != 'CLIENTE' && req.body.sesion.rol != 'ADMIN'){
        res.status(400).json({
            name: 'InvalidPermits',
            message: 'El Rol actual no tiene permitido esta peticion'
        })
        return
    }

    if(cedula != req.body.sesion.cedula && req.body.sesion.rol == 'CLIENTE') {
        res.status(400).json({
            name: 'InvalidPermits',
            message: 'El Rol actual no tiene permitido esta peticion'
        })
        return
    }

    const listaRecargas = await recuperarListaRecargasCliente(cedula, desde, hasta)

    res.status(200).json(listaRecargas)
})

Routes.post('/api/recargas/registrarRecarga', comprobarTokenMiddleware, async (req, res) => {
    const { numeroDeReferencia, cedulaTitular, fechaDePago, banco, token, cedulaCliente } = req.body

    if(req.body.sesion.rol != 'CLIENTE' && req.body.sesion.rol != 'ADMIN'){
        res.status(400).json({
            name: 'InvalidPermits',
            message: 'El Rol actual no tiene permitido esta peticion'
        })
        return
    }

    const data = await registrarRecargaCliente({ numeroDeReferencia, cedulaTitular, fechaDePago, banco, token, cedulaCliente })

    res.status(200).json(data)
})

module.exports = Routes