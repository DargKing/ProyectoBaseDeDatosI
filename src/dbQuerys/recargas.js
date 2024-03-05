const getConnection = require('./conectar')

const recuperarListaRecargasCliente = async (cedula, desde, hasta) => {
  const db = await getConnection()
  const data = await db.request().query('SELECT * FROM Banco')

  return [{
    id: 1,
    numeroDeReferencia: 2324,
    saldo: 233,
    fechaDeRecarga: "2024-12-02T04:00:00.000Z",
    pago: {
      cedulaTitular: 'V-1',
      monto: 232,
      idBanco: '0102',
      fechaDePago: "2024-12-02T04:00:00.000Z",
      estado: 'VERIFICADO'
    },
    cedulaCliente: 'V-2'
  }, {
    id: 2,
    numeroDeReferencia: 1234,
    saldo: 450,
    fechaDeRecarga: "2024-03-15T10:30:00.000Z",
    pago: {
      cedulaTitular: "V-5",
      monto: 150,
      idBanco: '0102',
      fechaDePago: "2024-03-14T18:45:00.000Z",
      estado: "VERIFICADO"
    },
    cedulaCliente: "V-8"
  }, {
    id: 3,
    numeroDeReferencia: 5678,
    saldo: null,
    fechaDeRecarga: "2024-03-18T14:20:00.000Z",
    pago: {
      cedulaTitular: "V-2",
      monto: null,
      idBanco: '0102',
      fechaDePago: "2024-03-17T20:00:00.000Z",
      estado: "RECHAZADO"
    },
    cedulaCliente: "V-4"
  }, {
    id: 1,
    numeroDeReferencia: 2324,
    saldo: 233,
    fechaDeRecarga: "2024-12-02T04:00:00.000Z",
    pago: {
      cedulaTitular: 'V-1',
      monto: 232,
      idBanco: '0102',
      fechaDePago: "2024-12-02T04:00:00.000Z",
      estado: 'VERIFICADO'
    },
    cedulaCliente: 'V-2'
  }, {
    id: 2,
    numeroDeReferencia: 1234,
    saldo: 450,
    fechaDeRecarga: "2024-03-15T10:30:00.000Z",
    pago: {
      cedulaTitular: "V-5",
      monto: 150,
      idBanco: '0102',
      fechaDePago: "2024-03-14T18:45:00.000Z",
      estado: "VERIFICADO"
    },
    cedulaCliente: "V-8"
  }, {
    id: 3,
    numeroDeReferencia: 5678,
    saldo: null,
    fechaDeRecarga: "2024-03-18T14:20:00.000Z",
    pago: {
      cedulaTitular: "V-2",
      monto: null,
      idBanco: '0102',
      fechaDePago: "2024-03-17T20:00:00.000Z",
      estado: "RECHAZADO"
    },
    cedulaCliente: "V-4"
  }, {
    id: 1,
    numeroDeReferencia: 2324,
    saldo: 233,
    fechaDeRecarga: "2024-12-02T04:00:00.000Z",
    pago: {
      cedulaTitular: 'V-1',
      monto: 232,
      idBanco: '0102',
      fechaDePago: "2024-12-02T04:00:00.000Z",
      estado: 'VERIFICADO'
    },
    cedulaCliente: 'V-2'
  }, {
    id: 2,
    numeroDeReferencia: 1234,
    saldo: 450,
    fechaDeRecarga: "2024-03-15T10:30:00.000Z",
    pago: {
      cedulaTitular: "V-5",
      monto: 150,
      idBanco: '0102',
      fechaDePago: "2024-03-14T18:45:00.000Z",
      estado: "VERIFICADO"
    },
    cedulaCliente: "V-8"
  }, {
    id: 3,
    numeroDeReferencia: 5678,
    saldo: null,
    fechaDeRecarga: "2024-03-18T14:20:00.000Z",
    pago: {
      cedulaTitular: "V-2",
      monto: null,
      idBanco: '0102',
      fechaDePago: "2024-03-17T20:00:00.000Z",
      estado: "RECHAZADO"
    },
    cedulaCliente: "V-4"
  }, {
    id: 1,
    numeroDeReferencia: 2324,
    saldo: 233,
    fechaDeRecarga: "2024-12-02T04:00:00.000Z",
    pago: {
      cedulaTitular: 'V-1',
      monto: 232,
      idBanco: '0102',
      fechaDePago: "2024-12-02T04:00:00.000Z",
      estado: 'VERIFICADO'
    },
    cedulaCliente: 'V-2'
  }, {
    id: 2,
    numeroDeReferencia: 1234,
    saldo: 450,
    fechaDeRecarga: "2024-03-15T10:30:00.000Z",
    pago: {
      cedulaTitular: "V-5",
      monto: 150,
      idBanco: '0102',
      fechaDePago: "2024-03-14T18:45:00.000Z",
      estado: "VERIFICADO"
    },
    cedulaCliente: "V-8"
  }, {
    id: 3,
    numeroDeReferencia: 5678,
    saldo: null,
    fechaDeRecarga: "2024-03-18T14:20:00.000Z",
    pago: {
      cedulaTitular: "V-2",
      monto: null,
      idBanco: '0102',
      fechaDePago: "2024-03-17T20:00:00.000Z",
      estado: "RECHAZADO"
    },
    cedulaCliente: "V-4"
  }, {
    id: 1,
    numeroDeReferencia: 2324,
    saldo: 233,
    fechaDeRecarga: "2024-12-02T04:00:00.000Z",
    pago: {
      cedulaTitular: 'V-1',
      monto: 232,
      idBanco: '0102',
      fechaDePago: "2024-12-02T04:00:00.000Z",
      estado: 'VERIFICADO'
    },
    cedulaCliente: 'V-2'
  }, {
    id: 2,
    numeroDeReferencia: 1234,
    saldo: 450,
    fechaDeRecarga: "2024-03-15T10:30:00.000Z",
    pago: {
      cedulaTitular: "V-5",
      monto: 150,
      idBanco: '0102',
      fechaDePago: "2024-03-14T18:45:00.000Z",
      estado: "VERIFICADO"
    },
    cedulaCliente: "V-8"
  }, {
    id: 3,
    numeroDeReferencia: 5678,
    saldo: null,
    fechaDeRecarga: "2024-03-18T14:20:00.000Z",
    pago: {
      cedulaTitular: "V-2",
      monto: null,
      idBanco: '0102',
      fechaDePago: "2024-03-17T20:00:00.000Z",
      estado: "RECHAZADO"
    },
    cedulaCliente: "V-4"
  }
  ]
}

const registrarRecargaCliente = async ({ cedulaCliente, cedulaTitular, banco, numeroDeReferencia, fechaDePago }) => {
  return {}
}

module.exports = { recuperarListaRecargasCliente, registrarRecargaCliente }