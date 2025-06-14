USE master;

CREATE DATABASE tareasPendientes;

USE tareasPendientes;

CREATE TABLE tareaas(
	id int identity(1,1) primary key,
	titulo varchar(120),
	descripcion varchar(200),
	estado varchar(20) default 'Pendiente',  -- pendiente o completado
	prioridad varchar(15) -- bajo , medio , alto
);

INSERT INTO tareaas ([titulo],[descripcion],[prioridad]) 
VALUES ('TAREAS DE QUIMICA', 'FORMULAS QUIMICAS','BAJO'),
('TAREAS DE MATEMATICAS', 'PITAGORAS','ALTO'),
('TAREAS DE COMUNICACION', 'RESPONDER PREGUNTAS DE UNA LECTURA','MEDIO'),
('TAREAS DE ARTE', 'HACER DEGRADADO CON COLORES','BAJO');

SELECT * FROM tareaas;