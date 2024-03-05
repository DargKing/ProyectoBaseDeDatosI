/*CONSULTA REVISION*/

--INSERTAR REVISION
INSERT INTO Revision (placa_vehiculo, id_cedula_empleadoAdm, fecha_revision, resultado, observaciones)

--MODIFICAR 
--cedula del empleado adm
UPDATE Revision
SET id_cedula_empleadoAdm = '1234567890'
WHERE id_revision = 1;


--fecha
UPDATE Revision
SET fecha_revision = '2024-03-06 09:00:00'
WHERE id_revision = 1;

--resultado
UPDATE Revision
SET resultado = 2
WHERE id_revision = 1;

--observacion
UPDATE Revision
SET observaciones = 'Requiere reparaciones adicionales'
WHERE id_revision = 1;

