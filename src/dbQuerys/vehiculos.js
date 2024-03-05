const getConnection = require('./conectar')

const buscarListaVehiculos = async (cedula) => {
  return [
    {
      color: 'ROJO',
      modelo: {
        nombre: 'COROLLA',
        marca: {
          nombre: 'TOYOTA'
        }
      },
      placa: 'ABCDEF',
      cedulaChofer: 'V-1',
      estado: 'ACTIVO'
    }, {
      color: 'ROJO',
      modelo: {
        nombre: 'COROLLA',
        marca: {
          nombre: 'TOYOTA'
        }
      },
      placa: 'ABCDEF',
      cedulaChofer: 'V-1',
      estado: 'ACTIVO'
    },
    {
      color: 'AZUL',
      modelo: {
        nombre: 'CAMRY',
        marca: {
          nombre: 'TOYOTA'
        }
      },
      placa: 'GHIJKL',
      cedulaChofer: 'V-2',
      estado: 'INACTIVO'
    },
    {
      color: 'VERDE',
      modelo: {
        nombre: 'RAV4',
        marca: {
          nombre: 'TOYOTA'
        }
      },
      placa: 'MNOPQR',
      cedulaChofer: 'V-3',
      estado: 'ACTIVO'
    }
  ]
}

const buscarVehiculo = async ({ placa }) => {
  return {
    color: 'Verde',
    modelo: {
      nombre: 'RAV4',
      marca: {
        nombre: 'TOYOTA'
      }
    },
    placa: 'MNOPQR',
    cedulaChofer: 'V-1',
    estado: 'ACTIVO'
  }
}

const modificarVehiculo = async ({ placa, color, estado }) => {
  return {
    color: 'Rojo',
    modelo: {
      nombre: 'RAV4',
      marca: {
        nombre: 'TOYOTA'
      }
    },
    placa: 'MNOPQR',
    cedulaChofer: 'V-1',
    estado: 'ACTIVO'
  }
}
module.exports = { buscarListaVehiculos, buscarVehiculo, modificarVehiculo }