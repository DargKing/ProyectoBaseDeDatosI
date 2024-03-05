
CREATE TABLE Usuario (
    id INT identity(1,1) PRIMARY KEY,
    nombre_usuario VARCHAR(20) NOT NULL UNIQUE,
    contraseña VARCHAR(20) NOT NULL,
    rol VARCHAR(30) NOT NULL,
    fecha_de_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);




