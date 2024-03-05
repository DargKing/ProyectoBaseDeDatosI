const getConnection = require('./conectar')

const recuperarRecibosPagoChofer = async ({ cedula, desde, hasta }) => {
  return [
    {
      id: 1,
      cedulaEmpleadoAdministrativo: 'V-3',
      idPago: 23,
      pago: {
        monto: 210,
        fechaDePago: 1709652645402,
        estado: 'PAGADO',
        numeroDeReferencia: 23444,
      },
      idCuentaBancaria: 23,
      cuentaBancaria: {
        idBanco: '0102',
        banco: {
          nombre: 'BANCO DE VENEZUELA'
        },
        cedulaTitular: 'V-3',
        telefono: '+58414-8698221'
      },
      fechaDePago: 1709652645402,
      traslado: {
        id: 33,
        saldoACobrar: 300,
        distancia: 3,
        tiempo: 10000
      }
    },
    {
      id: 2,
      cedulaEmpleadoAdministrativo: 'V-4',
      idPago: 24,
      pago: {
        monto: 150,
        fechaDePago: 1709652645403,
        estado: 'PAGADO',
        numeroDeReferencia: 23445,
      },
      idCuentaBancaria: 24,
      cuentaBancaria: {
        idBanco: '0103',
        banco: {
          nombre: 'BANCO PROVINCIAL'
        },
        cedulaTitular: 'V-4',
        telefono: '+58414-8698222'
      },
      fechaDePago: 1709652645403,
      traslado: {
        id: 34,
        saldoACobrar: 400,
        distancia: 3,
        tiempo: 10000
      }
    }, {
      id: 2,
      cedulaEmpleadoAdministrativo: 'V-4',
      idPago: 24,
      pago: {
        monto: 150,
        fechaDePago: 1709652645403,
        estado: 'PAGADO',
        numeroDeReferencia: 23445,
      },
      idCuentaBancaria: 24,
      cuentaBancaria: {
        idBanco: '0103',
        banco: {
          nombre: 'BANCO PROVINCIAL'
        },
        cedulaTitular: 'V-4',
        telefono: '+58414-8698222'
      },
      fechaDePago: 1709652645403,
      traslado: {
        id: 34,
        saldoACobrar: 400,
        distancia: 3,
        tiempo: 10000
      }
    },
    {
      id: 3,
      cedulaEmpleadoAdministrativo: 'V-5',
      idPago: 25,
      pago: {
        monto: 300,
        fechaDePago: 1709652645404,
        estado: 'PENDIENTE',
        numeroDeReferencia: 23446,
      },
      idCuentaBancaria: 25,
      cuentaBancaria: {
        idBanco: '0104',
        banco: {
          nombre: 'BANCO MERCANTIL'
        },
        cedulaTitular: 'V-5',
        telefono: '+58414-8698223'
      },
      fechaDePago: 1709652645404,
      traslado: {
        id: 35,
        saldoACobrar: 500,
        distancia: 3,
        tiempo: 10000
      }
    },
    {
      id: 4,
      cedulaEmpleadoAdministrativo: 'V-6',
      idPago: 26,
      pago: {
        monto: 180,
        fechaDePago: 1709652645405,
        estado: 'PAGADO',
        numeroDeReferencia: 23447,
      },
      idCuentaBancaria: 26,
      cuentaBancaria: {
        idBanco: '0105',
        banco: {
          nombre: 'BANCO PROVINCIAL'
        },
        cedulaTitular: 'V-6',
        telefono: '+58414-8698224'
      },
      fechaDePago: 1709652645405,
      traslado: {
        id: 36,
        saldoACobrar: 600,
        distancia: 3,
        tiempo: 10000
      }
    }
  ]
}

module.exports = { recuperarRecibosPagoChofer }