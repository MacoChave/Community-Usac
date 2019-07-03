CREATE TABLE Cargo (
    cod_cargo   NUMBER,
    cargo       VARCHAR2(50) NOT NULL,
    CONSTRAINT PK_Cargo PRIMARY KEY (cod_cargo)
);

CREATE SEQUENCE SEQ_CARGO;

CREATE TRIGGER TRG_CARGO
    BEFORE INSERT ON Cargo
    FOR EACH ROW
BEGIN 
    SELECT SEQ_CARGO.NEXTVAL
    INTO :new.cod_cargo
    FROM dual;
END;

CREATE TABLE Rol (
    cod_rol         NUMBER,
    rol             VARCHAR2(50),
    CONSTRAINT PK_Rol PRIMARY KEY (cod_rol)
);

CREATE SEQUENCE SEQ_ROL;

CREATE TRIGGER TRG_ROL
    BEFORE INSERT ON Rol
    FOR EACH ROW
BEGIN 
    SELECT SEQ_ROL.NEXTVAL
    INTO :new.cod_rol
    FROM dual;
END;

CREATE TABLE Usuario (
    cod_usuario   NUMBER,
    carnet        NUMBER,
    no_registro   NUMBER,
    nombre        VARCHAR2(50) NOT NULL,
    url_foto      VARCHAR2(100),
    correo        VARCHAR2(50) NOT NULL,
    telefono      NUMBER,
    clave         VARCHAR2(10) NOT NULL,
    cod_rol       NUMBER,
    CONSTRAINT PK_Usuario PRIMARY KEY (cod_usuario),
    CONSTRAINT FK_RolUsuario FOREIGN KEY (cod_rol) REFERENCES Rol(cod_rol)
);

ALTER TABLE Usuario ADD cod_rol NUMBER;
ALTER TABLE Usuario ADD CONSTRAINT FK_RolUsuario FOREIGN KEY (cod_rol) REFERENCES Rol(cod_rol);

CREATE SEQUENCE SEQ_USUARIO;

CREATE TRIGGER TRG_USUARIO
    BEFORE INSERT ON Usuario
    FOR EACH ROW
BEGIN 
    SELECT SEQ_USUARIO.NEXTVAL
    INTO :new.cod_usuario
    FROM dual;
END;

CREATE VIEW VIEW_USUARIO AS
SELECT 
    u.cod_usuario, u.carnet, u.no_registro, u.nombre, u.url_foto, u.correo, u.telefono, u.clave, r.rol
FROM 
    Usuario U, Rol R 
WHERE 
    u.cod_rol = r.cod_rol;

CREATE TABLE Facultad (
    cod_facultad   NUMBER,
    nombre         VARCHAR2(50) NOT NULL,
    descripcion    VARCHAR2(200),
    CONSTRAINT PK_facultad PRIMARY KEY (cod_facultad)
);

CREATE SEQUENCE SEQ_FACULTAD;

CREATE TRIGGER TRG_FACULTAD
    BEFORE INSERT ON Facultad
    FOR EACH ROW
BEGIN 
    SELECT SEQ_FACULTAD.NEXTVAL
    INTO :new.cod_facultad
    FROM dual;
END;

CREATE TABLE Carrera (
    cod_carrera    NUMBER,
    cod_facultad   NUMBER NOT NULL,
    nombre         VARCHAR2(50) NOT NULL,
    descripcion    VARCHAR2(200),
    CONSTRAINT PK_Carrera PRIMARY KEY (cod_carrera, cod_facultad),
    CONSTRAINT FK_FacultadCarrera FOREIGN KEY (cod_facultad) REFERENCES Facultad(cod_facultad)
);

CREATE SEQUENCE SEQ_CARRERA;

CREATE TRIGGER TRG_CARRERA
    BEFORE INSERT ON Carrera
    FOR EACH ROW
BEGIN 
    SELECT SEQ_CARRERA.NEXTVAL
    INTO :new.cod_carrera
    FROM dual;
END;

CREATE OR REPLACE PROCEDURE PROC_C_CARRERA (
    i_facultad IN VARCHAR2,
    i_nombre IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
    s_facultad NUMBER;
BEGIN
    s_facultad := 0;

    SELECT f.cod_facultad INTO s_facultad
    FROM Facultad F
    WHERE f.nombre LIKE i_facultad;
    
    IF s_facultad > 0 THEN
        INSERT INTO Carrera 
            (nombre, descripcion, cod_facultad)
        VALUES 
            (i_nombre, i_descripcion, s_facultad);
    END IF;
END;

CREATE OR REPLACE PROCEDURE PROC_U_CARRERA (
    i_carrera IN NUMBER,
    i_facultad IN VARCHAR2,
    i_nombre IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
    s_facultad NUMBER;
BEGIN
    s_facultad := 0;

    SELECT f.cod_facultad INTO s_facultad
    FROM Facultad F
    WHERE f.nombre LIKE i_facultad;
    
    IF s_facultad > 0 THEN
        UPDATE Carrera 
        SET 
            nombre = i_nombre, 
            descripcion = i_descripcion 
        WHERE 
            cod_carrera = i_carrera AND 
            cod_facultad = i_facultad;
    END IF;
END;

CREATE VIEW VIEW_CARRERA AS
SELECT 
    c.cod_carrera, f.nombre AS facultad, c.nombre, c.descripcion
FROM Carrera C, Facultad F
WHERE 
    c.cod_facultad = f.cod_facultad;

CREATE TABLE Ciencia (
    cod_ciencia           NUMBER,
    nombre                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200),
    cod_carrera           NUMBER NOT NULL,
    cod_facultad          NUMBER NOT NULL,
    CONSTRAINT PK_Ciencia PRIMARY KEY (cod_ciencia),
    CONSTRAINT FK_CarreraCiencia FOREIGN KEY (cod_carrera, cod_facultad) REFERENCES Carrera(cod_carrera, cod_facultad)
);

CREATE SEQUENCE SEQ_CIENCIA;

CREATE TRIGGER TRG_CIENCIA
    BEFORE INSERT ON Ciencia
    FOR EACH ROW
BEGIN 
    SELECT SEQ_CIENCIA.NEXTVAL
    INTO :new.cod_ciencia
    FROM dual;
END;

CREATE OR REPLACE PROCEDURE PROC_C_CIENCIA (
    i_nombre IN VARCHAR2, 
    i_descripcion IN VARCHAR2, 
    i_facultad IN VARCHAR2, 
    i_carrera IN VARCHAR2)
IS 
    s_carrera NUMBER;
    s_facultad NUMBER;
BEGIN
    s_carrera := 0;
    s_facultad := 0;

    SELECT c.cod_carrera INTO s_carrera
    FROM Carrera C
    WHERE c.nombre LIKE i_carrera;

    SELECT f.cod_facultad INTO s_facultad
    FROM Facultad F
    WHERE f.nombre LIKE i_facultad;
    
    IF s_carrera > 0 AND s_facultad > 0 THEN
        INSERT INTO Ciencia 
            (nombre, descripcion, cod_carrera, cod_facultad)
        VALUES 
            (i_nombre, i_descripcion, s_carrera, s_facultad);
    END IF;
END;

CREATE OR REPLACE PROCEDURE PROC_U_CIENCIA (
    i_id IN NUMBER,
    i_nombre IN VARCHAR2, 
    i_descripcion IN VARCHAR2)
IS 
BEGIN
    UPDATE Ciencia
    SET 
        nombre = i_nombre, 
        descripcion = i_descripcion 
    WHERE 
        cod_ciencia = i_id;
END;

CREATE VIEW VIEW_CIENCIA AS 
SELECT 
    m.nombre, m.descripcion, c.nombre AS carrera, f.nombre AS facultad
FROM 
    Ciencia M, Carrera C, Facultad F
WHERE 
    m.cod_carrera = c.cod_carrera AND 
    m.cod_facultad = f.cod_facultad;

CREATE TABLE Chat (
    cod_emisor                 NUMBER NOT NULL,
    cod_receptor               NUMBER NOT NULL,
    url_chat                   VARCHAR2(100) NOT NULL,
    fecha_creacion             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Chat PRIMARY KEY (cod_emisor, cod_receptor),
    CONSTRAINT FK_UsuarioChatE FOREIGN KEY (cod_emisor) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_UsuarioChatR FOREIGN KEY (cod_receptor) REFERENCES Usuario(cod_usuario)
);

CREATE OR REPLACE PROCEDURE PROC_C_CHAT (
    i_emisor IN VARCHAR2,
    i_receptor IN VARCHAR2,
    i_chat IN VARCHAR2
)
IS 
    s_emisor NUMBER;
    s_receptor NUMBER;
BEGIN 
    s_emisor := 0;
    s_receptor := 0;

    SELECT cod_usuario INTO s_emisor
    FROM Usuario 
    WHERE nombre LIKE i_emisor;

    SELECT cod_usuario INTO s_receptor
    FROM Usuario 
    WHERE nombre LIKE i_receptor;

    IF s_emisor > 0 AND s_receptor > 0 THEN 
        INSERT INTO Chat 
            (cod_emisor, cod_receptor, url_chat)
        VALUES 
            (s_emisor, s_receptor, i_chat);
    END IF;
END;

CREATE TABLE Detalle_cargo (
    cod_usuario           NUMBER NOT NULL,
    cod_cargo             NUMBER NOT NULL,
    cod_facultad          NUMBER NOT NULL,
    cod_carrera           NUMBER NOT NULL,
    CONSTRAINT PK_DetalleCargo PRIMARY KEY (cod_usuario, cod_cargo, cod_carrera),
    CONSTRAINT FK_UsuarioCargo FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_CargoDetalle FOREIGN KEY (cod_cargo) REFERENCES Cargo(cod_cargo),
    CONSTRAINT FK_CarreraCargo FOREIGN KEY (cod_carrera, cod_facultad) REFERENCES Carrera(cod_carrera, cod_facultad)
);

CREATE OR REPLACE PROCEDURE PROC_C_DETALLE_CARGO (
  i_usuario IN VARCHAR2,
  i_cargo IN VARCHAR2,
  i_facultad IN VARCHAR2,
  i_carrera IN VARCHAR2
)
IS
    s_usuario NUMBER;
    s_cargo NUMBER;
    s_facultad NUMBER;
    s_carrera NUMBER;
BEGIN 
    SELECT cod_usuario INTO s_usuario
    FROM Usuario 
    WHERE nombre LIKE i_usuario;

    SELECT cod_cargo INTO s_cargo
    FROM Cargo 
    WHERE cargo LIKE i_cargo;

    SELECT c.cod_carrera INTO s_carrera
    FROM Carrera C
    WHERE c.nombre LIKE i_carrera;

    SELECT f.cod_facultad INTO s_facultad
    FROM Facultad F
    WHERE f.nombre LIKE i_facultad;

    IF cod_usuario > 0 AND cod_cargo > 0 AND cod_carrera > 0 AND cod_facultad > 0 THEN 
        INSERT INTO Detalle_cargo 
            (cod_usuario, cod_cargo, cod_facultad, cod_carrera) 
        VALUES 
            (s_usuario, s_cargo, s_facultad, s_carrera);
    END IF;
END;

CREATE VIEW VIEW_DETALLE_CARGO AS 
SELECT u.nombre, r.cargo, f.nombre AS facultad, c.nombre AS carrera
FROM 
    Detalle_cargo DC, Usuario u, Cargo R, Facultad F, Carrera C 
WHERE 
    dc.cod_usuario = u.cod_usuario AND 
    dc.cod_cargo = r.cod_cargo AND 
    dc.cod_facultad = f.cod_facultad AND 
    dc.cod_carrera = c.cod_carrera;

CREATE TABLE Asignacion ( 
    cod_usuario                         NUMBER NOT NULL,
    cod_ciencia                         NUMBER NOT NULL,
    CONSTRAINT PK_ASIGNACION PRIMARY KEY (cod_usuario, cod_ciencia),
    CONSTRAINT FK_UsuarioAsignacion FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_CienciaAsignacion FOREIGN KEY (cod_ciencia) REFERENCES Ciencia(cod_ciencia)
);

CREATE OR REPLACE PROCEDURE PROC_C_ASIGNACION(
    i_usuario IN VARCHAR2,
    i_ciencia IN VARCHAR2
)
IS 
    s_usuario NUMBER;
    s_ciencia NUMBER;
BEGIN 
    s_usuario := 0;
    s_ciencia := 0;

    SELECT cod_usuario INTO s_usuario
    FROM Usuario 
    WHERE nombre LIKE i_usuario;

    SELECT cod_ciencia INTO s_ciencia
    FROM Ciencia 
    WHERE nombre LIKE i_ciencia;

    IF s_usuario > 0 AND s_ciencia > 0 THEN 
        INSERT INTO Asignacion 
            (cod_usuario, cod_ciencia)
        VALUES 
            (s_usuario, s_ciencia);
    END IF;
END;

CREATE VIEW VIEW_ASIGNACION AS 
SELECT 
    u.nombre AS usuario, c.nombre AS ciencia 
FROM 
    Asignacion A, Usuario U, Ciencia C 
WHERE 
    a.cod_usuario = u.cod_usuario AND 
    a.cod_ciencia = c.cod_ciencia;

CREATE TABLE Tema (
    cod_tema              NUMBER,
    cod_usuario           NUMBER NOT NULL,
    titulo                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200) NOT NULL,
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_cierre          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Tema PRIMARY KEY (cod_tema),
    CONSTRAINT FK_UsuarioTema FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario)
);

CREATE SEQUENCE SEQ_TEMA;

CREATE TRIGGER TRG_TEMA
    BEFORE INSERT ON Tema
    FOR EACH ROW
BEGIN 
    SELECT SEQ_TEMA.NEXTVAL
    INTO :new.cod_tema
    FROM dual;
END;

CREATE OR REPLACE PROCEDURE PROC_C_TEMA(
    i_usuario IN VARCHAR2,
    i_titulo IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
    s_usuario NUMBER;
BEGIN 
    s_usuario := 0;

    SELECT cod_usuario INTO s_usuario
    FROM Usuario
    WHERE nombre LIKE i_usuario;

    IF s_usuario > 0 THEN 
        INSERT INTO Tema 
            (cod_usuario, titulo, descripcion, fecha_cierre)
        VALUES 
            (s_usuario, i_titulo, i_descripcion, NULL);

END PROC_C_TEMA;

CREATE OR REPLACE PROCEDURE PROC_U_TEMA(
    i_cod_tema IN NUMBER,
    i_titulo IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Tema SET
        (cod_usuario, titulo, descripcion, fecha_cierre)
    SET 
        titulo = i_titulo, 
        descripcion = i_descripcion
    WHERE 
        Tema.cod_tema = i_cod_tema;
            
END PROC_U_TEMA;

CREATE VIEW VIEW_TEMA AS 
SELECT 
    u.nombre AS usuario, t.titulo, t.descripcion, t.fecha_creacion, t.fecha_cierre 
FROM 
    Tema T, Usuario U
WHERE 
    t.cod_usuario = u.cod_usuario;

CREATE TABLE Src_tema (
    cod_srs_tema               NUMBER,
    url_imagen                 VARCHAR2(100) NOT NULL,
    tag                        VARCHAR2(50),
    cod_tema                   NUMBER NOT NULL,
    CONSTRAINT PK_SrcTema PRIMARY KEY (cod_srs_tema),
    CONSTRAINT FK_TemaSrc FOREIGN KEY (cod_tema) REFERENCES Tema(cod_tema)
);

CREATE OR REPLACE PROCEDURE PROC_C_SRCTEMA(
    i_image IN VARCHAR2,
    i_tag IN VARCHAR2,
    i_tema IN VARCHAR2
)
IS 
    s_tema NUMBER;
BEGIN 
    s_tema := 0;

    SELECT cod_tema INTO s_tema
    FROM Tema 
    Where titulo LIKE i_tema;

    IF s_tema > 0 THEN 
        INSERT INTO Src_tema 
            (url_imagen, tag, cod_tema) 
        VALUES 
            (i_image, i_tag, s_tema);
    END IF;
END PROC_C_SRCTEMA;

CREATE OR REPLACE PROCEDURE PROC_U_SRCTEMA(
    i_src_tema IN NUMBER,
    i_image IN VARCHAR2,
    i_tag IN VARCHAR2,
    i_tema IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Src_tema 
    SET 
        url_imagen = i_image, 
        tag = i_tag
    WHERE cod_srs_tema = i_src_tema;
END PROC_U_SRCTEMA;

CREATE VIEW VIEW_SRC_TEMA AS 
SELECT 
    st.cod_srs_tema, st.url_imagen, st.tag, t.titulo
FROM 
    Src_tema ST, Tema T 
WHERE 
    st.cod_tema = t.cod_tema;

CREATE SEQUENCE SEQ_SRC_TEMA;

CREATE TRIGGER TRG_SRC_TEMA
    BEFORE INSERT ON Src_tema
    FOR EACH ROW
BEGIN 
    SELECT SEQ_SRC_TEMA.NEXTVAL
    INTO :new.cod_srs_tema
    FROM dual;
END;

CREATE TABLE Etiqueta (
    cod_tema                   NUMBER NOT NULL,
    cod_ciencia                NUMBER NOT NULL,
    CONSTRAINT PK_Etiqueta PRIMARY KEY (cod_tema, cod_ciencia),
    CONSTRAINT FK_TemaEtiqueta FOREIGN KEY (cod_tema) REFERENCES Tema(cod_tema),
    CONSTRAINT FK_CienciaTema FOREIGN KEY (cod_ciencia) REFERENCES Ciencia(cod_ciencia)
);

CREATE TABLE Comentario (
    cod_comentario             NUMBER,
    contenido                  VARCHAR2(200),
    url_imagen                 VARCHAR2(100),
    tag                        VARCHAR2(50),
    cod_tema                   NUMBER NOT NULL,
    cod_usuario                NUMBER NOT NULL,
    CONSTRAINT PK_Comentario PRIMARY KEY (cod_comentario),
    CONSTRAINT FK_TemaComentario FOREIGN KEY (cod_tema) REFERENCES Tema(cod_tema),
    CONSTRAINT FK_UsuarioComentario FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario)
);

CREATE SEQUENCE SEQ_COMENTARIO;

CREATE TRIGGER TRG_COMENTARIO
    BEFORE INSERT ON Comentario
    FOR EACH ROW
BEGIN 
    SELECT SEQ_COMENTARIO.NEXTVAL
    INTO :new.cod_comentario
    FROM dual;
END;

CREATE TABLE Examen (
    cod_examen            NUMBER,
    cod_usuario           NUMBER NOT NULL,
    titulo                CLOB NOT NULL,
    tema                  CLOB NOT NULL,
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tiempo                NUMBER NOT NULL,
    duracion              NUMBER NOT NULL,
    activo                CHAR(1) DEFAULT '1',
    CONSTRAINT PK_Examen PRIMARY KEY (cod_examen, cod_usuario),
    CONSTRAINT FK_UsuarioExamen FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario)
);

CREATE SEQUENCE SEQ_EXAMEN;

CREATE TRIGGER TRG_EXAMEN
    BEFORE INSERT ON Examen
    FOR EACH ROW
BEGIN 
    SELECT SEQ_EXAMEN.NEXTVAL
    INTO :new.cod_examen
    FROM dual;
END;

-- ALTER TABLE Examen MODIFY activo CHAR(1) DEFAULT '1';
-- ALTER TABLE Examen ADD field NUMBER;

CREATE TABLE Tipo_pregunta (
    cod_tipo_pregunta   NUMBER,
    nombre              VARCHAR2(50) NOT NULL,
    CONSTRAINT PK_TipoP PRIMARY KEY (cod_tipo_pregunta)
);

CREATE SEQUENCE SEQ_TIPO_PREG;

CREATE TRIGGER TRG_TIPO_PREG
    BEFORE INSERT ON Tipo_pregunta
    FOR EACH ROW
BEGIN 
    SELECT SEQ_TIPO_PREG.NEXTVAL
    INTO :new.cod_tipo_pregunta
    FROM dual;
END;

CREATE TABLE Pregunta (
    cod_pregunta                      NUMBER,
    descripcion                       VARCHAR2(200), 
    cod_tipo_pregunta                 NUMBER NOT NULL,
    CONSTRAINT PK_Pregunta PRIMARY KEY (cod_pregunta),
    CONSTRAINT FK_TipopPregunta FOREIGN KEY (cod_tipo_pregunta) REFERENCES Tipo_pregunta(cod_tipo_pregunta)
);

CREATE TABLE Detalle_pregunta (
    cod_pregunta          NUMBER NOT NULL,
    cod_examen            NUMBER NOT NULL,
    cod_usuario           NUMBER NOT NULL,
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_DetalleP PRIMARY KEY (cod_pregunta, cod_examen, cod_usuario),
    CONSTRAINT FK_PreguntaDetalle FOREIGN KEY (cod_pregunta) REFERENCES Pregunta(cod_pregunta),
    CONSTRAINT FK_ExamenPregunta FOREIGN KEY (cod_examen, cod_usuario) REFERENCES Examen(cod_examen, cod_usuario)
);

CREATE TABLE Respuesta (
    cod_respuesta   NUMBER,
    respuesta       VARCHAR2(100) NOT NULL,
    CONSTRAINT PK_Respuesta PRIMARY KEY (cod_respuesta)
);

CREATE SEQUENCE SEQ_RESPUESTA;

CREATE OR REPLACE TRIGGER TRG_RESPUESTA
    BEFORE INSERT ON Respuesta
    FOR EACH ROW
BEGIN 
    SELECT SEQ_RESPUESTA.NEXTVAL
    INTO :new.cod_respuesta
    FROM dual;
END;

CREATE TABLE Detalle_respuesta (
    cod_pregunta              NUMBER NOT NULL,
    cod_respuesta             NUMBER NOT NULL,
    correcta                  CHAR(1) NOT NULL ,
    CONSTRAINT PK_DetalleRespuesta PRIMARY KEY (cod_pregunta, cod_respuesta),
    CONSTRAINT FK_PreguntaRespuesta FOREIGN KEY (cod_pregunta) REFERENCES Pregunta(cod_pregunta),
    CONSTRAINT FK_RespuestaDetalle FOREIGN KEY (cod_respuesta) REFERENCES Respuesta(cod_respuesta)
);