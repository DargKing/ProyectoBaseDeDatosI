const sql = require('mssql')
const getConnection = require('./conectar')
const { crearToken } = require('../libs/tokens')


const crearUsuario = async ({ nombres, apellidos, cedula, fechaDeNacimiento, genero, correo, direccion, telefono, nombre_usuario, contraseña, rol }) => {
    const database = await getConnection()

    console.log(rol)

    if (rol == 'CLIENTE') {
        try {
            const resUser = await database.request()
                .input('nombre_usuario', sql.VarChar, nombre_usuario)
                .input('contraseña', sql.VarChar, contraseña)
                .input('rol', sql.VarChar, rol)
                .query(`
            INSERT INTO Usuario (nombre_usuario, contraseña, rol)
            VALUES(@nombre_usuario, @contraseña, @rol)
            SELECT * FROM Usuario WHERE id = SCOPE_IDENTITY()
            `)
            console.log(resUser)
        } catch (err) {
            console.log(err)
        }


        // const generoC = (genero == 'MASCULINO') ? 'M' : 'F'
        // const user = resUser.recordset[0]
        // const idUser = user.id


        // const resCliente = await database.request()
        //     .input('nombres', sql.VarChar, nombres)
        //     .input('apellidos', sql.VarChar, apellidos)
        //     .input('cedula', sql.VarChar, cedula)
        //     .input('idUser', sql.VarChar, idUser)
        //     .input('genero', sql.VarChar, generoC)
        //     .input('direccion', sql.VarChar, direccion)
        //     .input('correo', sql.VarChar, correo)
        //     .input('telefono', sql.VarChar, telefono)
        //     .input('fechaDeNacimiento', sql.DateTime, fechaDeNacimiento)
        //     .query(`
        //     INSERT INTO Cliente (id_cedula, id_user, nombres, apellidos, fecha_nacimiento, genero, correo, telefono)
        //     VALUES(@cedula, @idUser, @nombres, @apellidos, @fechaDeNacimiento, @genero, @correo, @telefono)
        //     `)

        // const cliente = resCliente.recordset[0]
        // console.log(cliente)

        // const token = crearToken({
        //     nombres: cliente.nombres,
        //     apellidos: cliente.apellidos,
        //     cedula: cliente.id_cedula,
        //     // rol: cliente.Usuario.rol
        // })
        // return {
        //     token,
        //     data: {
        //         nombres: cliente.nombres,
        //         apellidos: cliente.apellidos,
        //         cedula: cliente.id_cedula,
        //         // rol: cliente.Usuario.rol
        //     }
        // }

        return {

        }
    }
}

const iniciarSesion = ({ nombre_usuario, contraseña }) => {
    return {
        token: crearToken({ nombre_usuario, rol: 'CHOFER', cedula: 'V-1' }),
        data: {
            rol: 'CHOFER',
            nombres: 'kevin',
            apellidos: 'balan',
            cedula: 'V-1'
        }
    }
}

module.exports = { crearUsuario, iniciarSesion }