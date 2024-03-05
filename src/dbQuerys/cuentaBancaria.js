const getConnection = require('./conectar')

const buscarCuentaBancaria = async ({ cedula }) => {
    return {
        numeroDeCuenta: '0000-2222-3333-4444',
        cedulaTitular: 'V-123',
        idBanco: '0102',
        banco: {
            nombre: 'BANCO DE VENEZUELA',
            rif: 'J-12231'
        },
        telefono: '+58414-8698221',
        cedulaChofer: 'V-1'
    }
}

const modificarCuentaBancaria = async ({ cedula, cedulaTitular, banco, telefono, numeroDeCuenta }) => {
    return {
        numeroDeCuenta: '0000-1111-3333-4444',
        cedulaTitular: 'V-123',
        idBanco: '0102',
        banco: {
            nombre: 'BANCO DE VENEZUELA',
            rif: 'J-12231'
        },
        telefono: '+58414-8698221',
        cedulaChofer: 'V-1'
    }
}

module.exports = { buscarCuentaBancaria, modificarCuentaBancaria }