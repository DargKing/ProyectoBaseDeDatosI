
CREATE TABLE Cliente(
id_cedula VARCHAR(20) PRIMARY KEY,
id_user INT 
CONSTRAINT FK_usuario_cliente FOREIGN KEY REFERENCES Usuario(id),
nombres VARCHAR(40) NOT NULL,
apellidos VARCHAR(50) NOT NULL,
fecha_nacimiento DATE,
genero VARCHAR(1) NOT NULL,
correo VARCHAR(50) NOT NULL,
telefono VARCHAR(13) NOT NULL);


