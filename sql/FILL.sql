/* FILL FACULTAD */
INSERT ALL
    INTO Facultad (nombre, descripcion) VALUES ('Agronomía', 'Facultad de Agronomía')
    INTO Facultad (nombre, descripcion) VALUES ('Arquitectura', 'Facultad de Arquitectura')
    INTO Facultad (nombre, descripcion) VALUES ('Ciencias Económicas', 'Facultad de Ciencias Economicas')
    INTO Facultad (nombre, descripcion) VALUES ('Ciencias Jurídicas y Sociales', 'Facultad de Ciencias Jurídicas y Sociales')
    INTO Facultad (nombre, descripcion) VALUES ('Ciencias Médicas', 'Facultad de Ciencias Médicas')
    INTO Facultad (nombre, descripcion) VALUES ('Ciencias Químicas y Farmacias', 'Facultad de Ciencias Químicas y Farmacia')
    INTO Facultad (nombre, descripcion) VALUES ('Humanidades', 'Facultad de Humanidades')
    INTO Facultad (nombre, descripcion) VALUES ('Ingeniería', 'Facultad de Ingeniería')
    INTO Facultad (nombre, descripcion) VALUES ('Odontología', 'Facultad de Odontología')
    INTO Facultad (nombre, descripcion) VALUES ('Medicina Veterinaria y Zootecnia', 'Facultad de Medicina Veterinaria y Zootecnia')
SELECT 1 FROM DUAL;

/* FILL CARRERAS */
INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (1, 'Recursos Naturales Renovables', 'Ingeniería Agronómica en Recursos Naturales Renovables')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (1, 'Sistemas de Producción Agrícola', 'Ingeniería Agronómica en Sistemas de Producción Agrícola')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (1, 'Gestión Ambiental Local', 'Ingeniería en Gestión Ambiental Local')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (1, 'Industrias Agropecuarias y Forestales', 'Ingeniería en Industrias Agropecuarias y Forestales')
SELECT 1 FROM DUAL;

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (2, 'Arquitectura', 'Arquitectura')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (2, 'Licenciatura en Diseño Grafico', 'Licenciatura en Diseño Grafico')
SELECT 1 FROM DUAL;

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (3, 'Administración de Empresas', 'Administración de Empresas')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (3, 'Contaduría Pública y Auditoría', 'Contaduría Pública y Auditoría')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (3, 'Economía', 'Economía')
SELECT 1 FROM DUAL;

INSERT INTO Carrera (cod_facultad, nombre, descripcion) 
VALUES (4, 'Ciencias Jurídicas y Sociales, Abogacía y Notariado', 'Licenciatura en Ciencias Jurídicas y Sociales, Abogacía y Notariado');

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (5, 'Técnico de Fisioterapia', 'Técnico de Fisioterapia')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (5, 'Técnico de Terapia Respiratoria', 'Técnico de Terapia Respiratoria')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (5, 'Técnico en Enfermería', 'Técnico en Enfermería')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (5, 'Ciencias Médicas', 'Maestría en Ciencias Médicas con Especialidad en Cardiología Pediátrica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (5, 'Medico y Cirujano', 'Medico y Cirujano')
SELECT 1 FROM DUAL;

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (6, 'Biología', 'Biología')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (6, 'Nutrición', 'Nutrición')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (6, 'Química', 'Química')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (6, 'Química Biológica', 'Química Biológica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (6, 'Química Farmacéutica', 'Química Farmacéutica')
SELECT 1 FROM DUAL;

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (7, 'Licenciatura en Arte', 'Licenciatura en Arte')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (7, 'Licenciatura en Filosofía', 'Licenciatura en Filosofía')
SELECT 1 FROM DUAL;

INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Civil', 'Ingeniería Civil')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Química', 'Ingeniería Química')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Industrial', 'Ingeniería Industrial')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Eléctrica', 'Ingeniería Eléctrica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Mecánica', 'Ingeniería Mecánica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Mecánica Eléctrica', 'Ingeniería Mecánica Eléctrica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Mecánica Industrial', 'Ingeniería Mecánica Industrial')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería en Ciencias y Sistemas', 'Ingeniería en Ciencias y Sistemas')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Electrónica', 'Ingeniería Electrónica')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (8, 'Ingeniería Ambiental', 'Ingeniería Ambiental')
SELECT 1 FROM DUAL;

INSERT INTO Carrera (cod_facultad, nombre, descripcion) 
VALUES (9, 'Cirujano Dentista', 'Cirujano Dentista');
INSERT ALL
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (10, 'Medicina Veterinaria', 'Medicina Veterinaria')
    INTO Carrera (cod_facultad, nombre, descripcion) VALUES (10, 'Zootecnia', 'Zootecnia')
SELECT 1 FROM DUAL;

/* SHOW CARRERA X FACULTAD */
SELECT * FROM Facultad;
SELECT * FROM Carrera;
SELECT f.nombre AS Facultad, c.nombre AS Carrera
FROM Facultad F, Carrera C
WHERE
    f.cod_facultad = c.cod_facultad;

/* FILL ROL */
INSERT INTO Rol (rol)
VALUES ('admin');
INSERT INTO Rol (rol)
VALUES ('user');

/* FILL USUARIO */
INSERT INTO Usuario (nombre, correo, clave, cod_rol)
VALUES ('admin', 'admin@community.usac.edu.gt', 'admin', 1);

/* FILL CIENCIA */
BEGIN
    proc_c_ciencia('MIA', 'Manejo e Implementación de Archivos', 'Ingeniería', 'Ingeniería en Ciencias y Sistemas');
    COMMIT;
END;