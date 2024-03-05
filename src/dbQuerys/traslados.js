const getConnection = require('./conectar')

const recuperarListaTrasladosCliente = async (cedula, desde, hasta) => {
  return [
    {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      chofer: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      chofer: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      chofer: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      chofer: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      chofer: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      chofer: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      chofer: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      chofer: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      chofer: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      chofer: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }
  ]
}

const recuperarListaTrasladosChofer = async (cedula, desde, hasta) => {
  return [
    {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      cliente: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      cliente: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      cliente: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      cliente: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      cliente: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      cliente: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 10
    }, {
      id: 23,
      cedulaCliente: 'V-1',
      cedulaChofer: 'V-32',
      cliente: {
        nombres: 'ALGUIEN',
        apellidos: 'PEREZ',
        telefono: '0424-8698221'
      },
      placaVehiculo: 'ABCDE6',
      vehiculo: {
        color: 'ROJO',
        modelo: {
          nombre: 'COROLLA',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 234,
      inicioTraslado: 1709588142934,
      finalTraslado: 1709588143934,
      estado: 'FINALIZADO',
      puntoInicial: '8.277443192166771; -62.747180339409006',
      puntoFinal: '8.27200688857532; -62.74485952622099',
      saldoACobrar: 300,
      tiempo: 1709588143934 - 1709588142934,
      distancia: 2
    }, {
      id: 45,
      cedulaCliente: 'V-10',
      cedulaChofer: 'V-21',
      cliente: {
        nombres: 'MARÍA',
        apellidos: 'GONZÁLEZ',
        telefono: '0412-5551234'
      },
      placaVehiculo: 'XYZ123',
      vehiculo: {
        color: 'AZUL',
        modelo: {
          nombre: 'CAMRY',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 567,
      inicioTraslado: 1709588145000,
      finalTraslado: 1709588146000,
      estado: 'PENDIENTE',
      puntoInicial: '8.280123456789; -62.750987654321',
      puntoFinal: '8.275432109876; -62.748765432109',
      saldoACobrar: 400,
      tiempo: 1709588146000 - 1709588145000,
      distancia: 5
    }, {
      id: 67,
      cedulaCliente: 'V-5',
      cedulaChofer: 'V-18',
      cliente: {
        nombres: 'PEDRO',
        apellidos: 'RODRÍGUEZ',
        telefono: '0416-7779876'
      },
      placaVehiculo: 'FGH789',
      vehiculo: {
        color: 'VERDE',
        modelo: {
          nombre: 'RAV4',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 890,
      inicioTraslado: 1709588147000,
      finalTraslado: 1709588148000,
      estado: 'APROBADO',
      puntoInicial: '8.279876543210; -62.746543210987',
      puntoFinal: '8.274321098765; -62.743210987654',
      saldoACobrar: 500,
      tiempo: 1709588148000 - 1709588147000,
      distancia: 7
    }, {
      id: 89,
      cedulaCliente: 'V-12',
      cedulaChofer: 'V-28',
      cliente: {
        nombres: 'CARLOS',
        apellidos: 'SÁNCHEZ',
        telefono: '0426-3334444'
      },
      placaVehiculo: 'LMN567',
      vehiculo: {
        color: 'BLANCO',
        modelo: {
          nombre: 'HIGHLANDER',
          marca: {
            nombre: 'TOYOTA'
          }
        }
      },
      numeroRecibo: 123,
      inicioTraslado: 1709588149000,
      finalTraslado: 1709588150000,
      estado: 'RECHAZADO',
      puntoInicial: '8.278765432109; -62.745432109876',
      puntoFinal: '8.273210987654; -62.742109876543',
      saldoACobrar: 600,
      tiempo: 1709588150000 - 1709588150000,
      distancia: 1
    }
  ]
}

const registrarTrasladoCliente = async ({ cedulaCliente, cedulaChofer, placaVehiculo, puntoInicial, puntoFinal, distancia, tiempo, saldoACobrar }) => {
  return {
    id: 23,
    cedulaCliente,
    cedulaChofer,
    chofer: {
      nombres: 'ALGUIEN',
      apellidos: 'PEREZ',
      telefono: '0424-8698221'
    },
    placaVehiculo,
    vehiculo: {
      color: 'ROJO',
      modelo: {
        nombre: 'COROLLA',
        marca: {
          nombre: 'TOYOTA'
        }
      }
    },
    puntoFinal,
    puntoInicial,
    distancia,
    saldoACobrar,
    tiempo,
    estado: 'EXTRACCION'
  }
}

const seleccionarChoferAlAzar = async () => {
  return {
    cedula: 'V-1',
    nombres: 'Juan',
    apellidos: 'Rodriguez',
    placaVehiculo: 'ABCDEF'
  }
}

const buscarTraslado = async ({ id }) => {
  return {
    id: 23,
    cedulaCliente: "V-1",
    cedulaChofer: "V-1",
    chofer: {
      nombres: "ALGUIEN",
      apellidos: "PEREZ",
      telefono: "0424-8698221"
    },
    placaVehiculo: "ABCDEF",
    vehiculo: {
      color: "ROJO",
      modelo: {
        nombre: "COROLLA",
        marca: {
          nombre: "TOYOTA"
        }
      }
    },
    puntoFinal: "8.278596833853584;-62.74130737248247",
    puntoInicial: "8.273915399999979;-62.74564009999999",
    distancia: 2.684,
    saldoACobrar: 80.52,
    tiempo: 323,
    estado: "FINALIZADO"
  }
}

const buscarTrasladoActivo = async ({ cedula }) => {
  return {
    id: 23,
    cedulaCliente: "V-1",
    cedulaChofer: "V-1",
    chofer: {
      nombres: "ALGUIEN",
      apellidos: "PEREZ",
      telefono: "0424-8698221"
    },
    placaVehiculo: "ABCDEF",
    vehiculo: {
      color: "ROJO",
      modelo: {
        nombre: "COROLLA",
        marca: {
          nombre: "TOYOTA"
        }
      }
    },
    puntoFinal: "8.277443192166771; -62.747180339409006",
    puntoInicial: "8.27200688857532; -62.74485952622099",
    distancia: 2.684,
    saldoACobrar: 80.52,
    tiempo: 323,
    estado: "FINALIZADO"
  }
}

module.exports = { recuperarListaTrasladosCliente, registrarTrasladoCliente, buscarTraslado, seleccionarChoferAlAzar, buscarTrasladoActivo, recuperarListaTrasladosChofer }