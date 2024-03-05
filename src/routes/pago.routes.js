const express = require('express')
const { comprobarTokenMiddleware } = require('./middlewares')
const { recuperarRecibosPagoChofer } = require('../dbQuerys/pagos')

const Routes = express.Router()

Routes.get('/api/ingresos/listaIngresos/:cedula', comprobarTokenMiddleware, async (req, res) => {
    const { cedula } = req.params
    const { rol, cedula: cedulaSesion } = req.body.sesion
    const { desde, hasta } = req.query

    if (rol != 'CHOFER' && rol != 'EMPLEADO ADMINISTRATIVO' && rol != 'ADMIN') {
        res.status(400).json({
            name: 'InvalidPermits',
            message: 'El Rol actual no tiene permitido esta peticion'
        })
        return
    }

    if (rol == 'CHOFER' && cedula != cedulaSesion) {
        res.status(400).json({
            name: 'InvalidPermits',
            message: 'El Rol actual no tiene permitido esta peticion'
        })
        return
    }

    const data = await recuperarRecibosPagoChofer({ cedula, desde, hasta })

    res.status(200).json(data)
})

module.exports = Routes