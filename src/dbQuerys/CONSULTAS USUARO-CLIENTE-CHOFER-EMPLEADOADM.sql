/*CONSULTAS USUARIO*/

--CREAR USUARIOS 
INSERT INTO Usuario (nombre_usuario, contraseña, rol)




/*CONSULTAS CLIENTES*/

--CREAR CLIENTE

INSERT INTO Cliente (id_cedula, id_user, nombres, apellidos, fecha_nacimiento, genero, correo, telefono)


/*CONSULTAS EMPLEADO ADMINISTRATIVO*/

--CREAR EMPLEDO ADMINISTRATIVO 
INSERT INTO Empleado_Administrativo (id_cedula, id_user, nombres, apellidos, fecha_nacimiento, genero, correo, telefono, direccion)



/*CONSULTAS CHOFER*/
--CREAR CHOFER
INSERT INTO Chofer (id_cedula, id_user, vehiculo_uso, nombres, apellidos, fecha_nacimiento, genero, direccion, correo, telefono, disponible)

--MODIFICAR campos
--disponible
UPDATE Chofer
SET disponible = 0
WHERE id_cedula = '1234567890';

--vehiculo_uso
UPDATE Chofer
SET vehiculo_uso = 'AB1CD2-123'
WHERE id_cedula = '1234567890';