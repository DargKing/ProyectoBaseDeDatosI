const express = require('express')
const { comprobarTokenMiddleware } = require('./middlewares')
const { buscarListaVehiculos, buscarVehiculo, modificarVehiculo } = require('../dbQuerys/vehiculos')
const { buscarCuentaBancaria, modificarCuentaBancaria } = require('../dbQuerys/cuentaBancaria')

const Routes = express.Router()

Routes.get('/api/cuentaBancaria/consultarCuentaBancaria/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params
  const { rol, cedula: cedulaSesion } = req.body.sesion

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

  const data = await buscarCuentaBancaria({ cedula })

  res.status(200).json(data)
})

Routes.patch('/api/cuentaBancaria/modificarCuentaBancaria/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params
  const { banco, cedulaTitular, numeroDeCuenta, telefono } = req.body

  const { rol, cedula: cedulaSesion } = req.body.sesion

  if (rol != 'CHOFER' && rol != 'ADMIN') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const cuentaBancaria = await buscarCuentaBancaria({ cedula })

  if (cedula != cuentaBancaria.cedulaChofer && rol == 'CHOFER') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const data = await modificarCuentaBancaria({ banco, cedulaTitular, numeroDeCuenta, telefono, cedula })

  res.status(200).json(data)
})

module.exports = Routes