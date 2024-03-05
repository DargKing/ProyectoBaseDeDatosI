const express = require('express')
const { comprobarTokenMiddleware } = require('./middlewares')
const { buscarListaVehiculos, buscarVehiculo, modificarVehiculo } = require('../dbQuerys/vehiculos')

const Routes = express.Router()

Routes.get('/api/vehiculos/consultarListaVehiculosChofer/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params

  if (req.body.sesion.rol != 'CHOFER' && req.body.sesion.rol != 'PERSONAL ADMINISTRATIVO' && req.body.sesion.rol != 'ADMIN') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  if (cedula != req.body.sesion.cedula && req.body.sesion.rol == 'CHOFER') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  try {
    const data = await buscarListaVehiculos(cedula)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      name: err.name,
      message: err.message
    })
  }
})

Routes.post('/api/vehiculos/ingresarVehiculo', comprobarTokenMiddleware, (req, res) => {
  const { placa, cedula, modelo, marca, color } = req.body

  const cedulaSesion = req.body.sesion.cedula
  const rol = req.body.sesion.rol

  if ((rol == 'CHOFER' && cedulaSesion != cedula) || (rol != 'CHOFER' && rol != 'ADMIN')) {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const data = buscarVehiculo({ placa })

  res.status(200).json(data)
})

Routes.post('/api/vehiculos/modificarVehiculo/:placa', comprobarTokenMiddleware, async (req, res) => {
  const { placa } = req.params
  const { estado, color } = req.body

  const cedulaSesion = req.body.sesion.cedula
  const rol = req.body.sesion.rol

  if ((rol != 'CHOFER' && rol != 'ADMIN')) {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const vehiculo = await buscarVehiculo({ placa })

  
  if (vehiculo.cedulaChofer != cedulaSesion && rol != 'ADMIN') {
    console.log(vehiculo) 
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const data = await modificarVehiculo({placa, color, estado})

  res.status(200).json(data)
})

module.exports = Routes