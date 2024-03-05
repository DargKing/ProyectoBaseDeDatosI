const express = require('express')
const { recuperarListaRecargasCliente, registrarRecargaCliente } = require('../dbQuerys/recargas')
const { comprobarTokenMiddleware } = require('./middlewares')
const { recuperarListaTrasladosCliente, buscarTraslado, registrarTrasladoCliente,
  seleccionarChoferAlAzar, buscarTrasladoActivo, recuperarListaTrasladosChofer } = require('../dbQuerys/traslados')
const Routes = express.Router()

Routes.get('/api/traslados/listaTrasladosCliente/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params
  const { desde, hasta } = req.query

  if (req.body.sesion.rol != 'CLIENTE' && req.body.sesion.rol != 'ADMIN' && req.body.sesion.rol != 'PERSONAL ADMINISTRATIVO') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  if (cedula != req.body.sesion.cedula && req.body.sesion.rol == 'CLIENTE') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const listaTraslados = await recuperarListaTrasladosCliente(cedula, desde, hasta)

  res.status(200).json(listaTraslados)
})

Routes.get('/api/traslados/listaTrasladosChofer/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params
  const { desde, hasta } = req.query

  if (req.body.sesion.rol != 'CHOFER' && req.body.sesion.rol != 'ADMIN' && req.body.sesion.rol != 'PERSONAL ADMINISTRATIVO') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }
  
  if (cedula != req.body.sesion.cedula && req.body.sesion.rol == 'CHOFER') {
    console.log(req.body)
    console.log(req.params)
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const listaTraslados = await recuperarListaTrasladosChofer(cedula, desde, hasta)

  res.status(200).json(listaTraslados)
})

Routes.get('/api/traslados/consultarTraslado/:codigo', comprobarTokenMiddleware, (req, res) => {
  const { cedula, rol } = req.body.sesion
  const id = req.params.codigo

  const data = buscarTraslado(cedula, id)

  res.status(200).json(data)
})


Routes.post('/api/traslados/crearTraslado', comprobarTokenMiddleware, async (req, res) => {
  const { cedulaCliente, puntoInicial, puntoFinal, tiempo, distancia } = req.body

  if (req.body.sesion.rol != 'CLIENTE' || (req.body.sesion.cedula != cedulaCliente)) {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  const saldoACobrar = Math.round(distancia * 30 * 100) / 100

  const chofer = await seleccionarChoferAlAzar()

  const data = await registrarTrasladoCliente({ cedulaCliente, cedulaChofer: chofer.cedula, placaVehiculo: chofer.placaVehiculo, puntoInicial, puntoFinal, tiempo, distancia, saldoACobrar })

  res.status(200).json(data)
})

Routes.get('/api/traslados/consultarEstadoTraslado/:codigo', comprobarTokenMiddleware, async (req, res) => {
  const id = parseInt(req.params.codigo)

  const data = await buscarTraslado({ id })

  if ((data.cedulaCliente != req.body.sesion.cedula || req.body.sesion.rol != 'CLIENTE') && (data.cedulaChofer != req.body.sesion.cedula || req.body.sesion.rol != 'CHOFER') && req.body.sesion.rol != 'ADMIN') {
    res.status(400).json({
      name: 'InvalidPermits',
      message: 'El Rol actual no tiene permitido esta peticion'
    })
    return
  }

  res.status(200).json(data)
})

Routes.get('/api/traslados/buscarTrasladoActivo/:cedula', comprobarTokenMiddleware, async (req, res) => {
  const { cedula } = req.params

  const traslado = await buscarTrasladoActivo(cedula)

  if (traslado == null) {
    res.status(404).json({
      ok: false
    })
    return
  }

  res.status(200).json(traslado)

})

module.exports = Routes