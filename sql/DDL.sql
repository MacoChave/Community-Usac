CREATE TABLE Cargo (
    cod_cargo   NUMBER,
    cargo       VARCHAR2(50) NOT NULL,
    descripcion VARCHAR2(200)
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
    rol             VARCHAR2(50)
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

/* ********************************************************
 * MODIFICACION : PK_COD_FACULTAD
***********************************************************/
CREATE TABLE Ciencia (
    cod_ciencia           NUMBER,
    nombre                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200),
    cod_carrera           NUMBER NOT NULL,
    cod_facultad          NUMBER NOT NULL,
    CONSTRAINT PK_Ciencia PRIMARY KEY (cod_ciencia, cod_carrera, cod_facultad),
    CONSTRAINT FK_CarreraCiencia FOREIGN KEY (cod_carrera, cod_facultad) REFERENCES Carrera(cod_carrera, cod_facultad)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

CREATE SEQUENCE SEQ_CIENCIA;

CREATE TRIGGER TRG_CIENCIA
    BEFORE INSERT ON Ciencia
    FOR EACH ROW
BEGIN 
    SELECT SEQ_CIENCIA.NEXTVAL
    INTO :new.cod_ciencia
    FROM dual;
END;

CREATE TABLE Chat (
    cod_emisor                 NUMBER NOT NULL,
    cod_receptor               NUMBER NOT NULL,
    url_chat                   VARCHAR2(100) NOT NULL,
    fecha_creacion             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Chat PRIMARY KEY (cod_emisor, cod_receptor),
    CONSTRAINT FK_UsuarioChatE FOREIGN KEY (cod_emisor) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_UsuarioChatR FOREIGN KEY (cod_receptor) REFERENCES Usuario(cod_usuario)
);

/* ********************************************************
 * MODIFICACION : PK COD_FACULTAD
***********************************************************/
CREATE TABLE Detalle_cargo (
    cod_usuario           NUMBER NOT NULL,
    cod_cargo             NUMBER NOT NULL,
    cod_facultad          NUMBER NOT NULL,
    cod_carrera           NUMBER NOT NULL,
    CONSTRAINT PK_DetalleCargo PRIMARY KEY (cod_usuario, cod_cargo, cod_carrera, cod_facultad),
    CONSTRAINT FK_UsuarioCargo FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_CargoDetalle FOREIGN KEY (cod_cargo) REFERENCES Cargo(cod_cargo),
    CONSTRAINT FK_CarreraCargo FOREIGN KEY (cod_carrera, cod_facultad) REFERENCES Carrera(cod_carrera, cod_facultad)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

/* ********************************************************
 * MODIFICACION : PK COD_CARRERA PK COD_FACULTAD
***********************************************************/
CREATE TABLE Asignacion ( 
    cod_usuario                         NUMBER NOT NULL,
    cod_ciencia                         NUMBER NOT NULL,
    cod_facultad                        NUMBER NOT NULL,
    cod_carrera                         NUMBER NOT NULL,
    CONSTRAINT PK_ASIGNACION PRIMARY KEY (cod_usuario, cod_ciencia, cod_facultad, cod_ciencia),
    CONSTRAINT FK_UsuarioAsignacion FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario),
    CONSTRAINT FK_CienciaAsignacion FOREIGN KEY (cod_ciencia, cod_facultad, cod_carrera) REFERENCES Ciencia(cod_ciencia, cod_facultad, cod_carrera)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

CREATE TABLE Tema (
    cod_tema              NUMBER,
    cod_usuario           NUMBER NOT NULL,
    titulo                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200) NOT NULL,
    motivo_cierre         VARCHAR2(200),
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

CREATE TABLE Src_tema (
    cod_srs_tema               NUMBER,
    url_imagen                 VARCHAR2(100) NOT NULL,
    tag                        VARCHAR2(50),
    cod_tema                   NUMBER NOT NULL,
    CONSTRAINT PK_SrcTema PRIMARY KEY (cod_srs_tema),
    CONSTRAINT FK_TemaSrc FOREIGN KEY (cod_tema) REFERENCES Tema(cod_tema)
);

CREATE SEQUENCE SEQ_SRC_TEMA;

CREATE TRIGGER TRG_SRC_TEMA
    BEFORE INSERT ON Src_tema
    FOR EACH ROW
BEGIN 
    SELECT SEQ_SRC_TEMA.NEXTVAL
    INTO :new.cod_srs_tema
    FROM dual;
END;

/* ********************************************************
 * MODIFICACION : 
***********************************************************/
CREATE TABLE Etiqueta (
    cod_tema                    NUMBER NOT NULL,
    cod_ciencia                 NUMBER NOT NULL,
    cod_facultad                NUMBER NOT NULL,
    cod_carrera                 NUMBER NOT NULL,
    CONSTRAINT PK_Etiqueta PRIMARY KEY (cod_tema, cod_ciencia, cod_facultad, cod_carrera),
    CONSTRAINT FK_TemaEtiqueta FOREIGN KEY (cod_tema) REFERENCES Tema(cod_tema),
    CONSTRAINT FK_CienciaTema FOREIGN KEY (cod_ciencia, cod_facultad, cod_carrera) REFERENCES Ciencia(cod_ciencia, cod_facultad, cod_carrera)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

CREATE TABLE Comentario (
    cod_comentario             NUMBER,
    contenido                  VARCHAR2(200),
    url_imagen                 VARCHAR2(100),
    tag                        VARCHAR2(50),
    fecha_creacion             TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

/* ********************************************************
 * MODIFICACION : FK COD_CIENCIA, COD_FACULTAD, COD_CARRERA
***********************************************************/
CREATE TABLE Examen (
    cod_examen            NUMBER,
    titulo                VARCHAR2(50) NOT NULL,
    tema                  VARCHAR2(100) NOT NULL,
    sala                  VARCHAR2(50)
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion    TIMESTAMP,
    duracion              NUMBER,
    estado                CHAR DEFAULT 'P',
    log                   VARCHAR(200), 
    cod_ciencia           NUMBER NOT NULL, 
    cod_facultad          NUMBER NOT NULL, 
    cod_carrera           NUMBER NOT NULL, 
    cod_usuario           NUMBER NOT NULL,
    CONSTRAINT PK_Examen PRIMARY KEY (cod_examen),
    CONSTRAINT FK_UsuarioExamen FOREIGN KEY (cod_usuario) REFERENCES Usuario(cod_usuario), 
    CONSTRAINT FK_CianciaExamen FOREIGN KEY (cod_ciencia, cod_facultad, cod_carrera) REFERENCES Ciencia(cod_ciencia, cod_facultad, cod_carrera)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

CREATE SEQUENCE SEQ_EXAMEN;

CREATE TRIGGER TRG_EXAMEN
    BEFORE INSERT ON Examen
    FOR EACH ROW
BEGIN 
    SELECT SEQ_EXAMEN.NEXTVAL
    INTO :new.cod_examen
    FROM dual;
END;

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

/* ********************************************************
 * MODIFICACION : FK ONLY COD_PREGUNTA, COD_EXAMEN
***********************************************************/
CREATE TABLE Detalle_pregunta (
    cod_pregunta          NUMBER NOT NULL,
    cod_examen            NUMBER NOT NULL,
    CONSTRAINT PK_DetalleP PRIMARY KEY (cod_pregunta, cod_examen, cod_usuario),
    CONSTRAINT FK_PreguntaDetalle FOREIGN KEY (cod_pregunta) REFERENCES Pregunta(cod_pregunta),
    CONSTRAINT FK_ExamenPregunta FOREIGN KEY (cod_examen, cod_usuario) REFERENCES Examen(cod_examen, cod_usuario)
);
/* ********************************************************
 * MODIFICACION 
***********************************************************/

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
    correcta                  NUMBER NOT NULL ,
    CONSTRAINT PK_DetalleRespuesta PRIMARY KEY (cod_pregunta, cod_respuesta),
    CONSTRAINT FK_PreguntaRespuesta FOREIGN KEY (cod_pregunta) REFERENCES Pregunta(cod_pregunta),
    CONSTRAINT FK_RespuestaDetalle FOREIGN KEY (cod_respuesta) REFERENCES Respuesta(cod_respuesta)
);