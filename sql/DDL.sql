-- Generado por Oracle SQL Developer Data Modeler 19.1.0.081.0911
--   en:        2019-06-26 12:25:00 CST
--   sitio:      Oracle Database 11g
--   tipo:      Oracle Database 11g

CREATE TABLE Cargo (
    cod_cargo   NUMBER AUTO_INCREMENT NOT NULL,
    cargo       VARCHAR2(50) NOT NULL,
    CONSTRAINT PK_Cargo PRIMARY KEY cod_cargo
);

CREATE SEQUENCE Seq_cargo
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Usuario (
    cod_usuario   NUMBER NOT NULL,
    carnet        NUMBER,
    no_registro   NUMBER,
    nombre        VARCHAR2(50) NOT NULL,
    url_foto      VARCHAR2(100),
    correo        VARCHAR2(50) NOT NULL,
    telefono      NUMBER,
    clave         VARCHAR2(10) NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY cod_usuario
);

CREATE SEQUENCE Seq_usuario 
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Facultad (
    cod_facultad   NUMBER NOT NULL,
    nombre         VARCHAR2(50) NOT NULL,
    descripcion    VARCHAR2(200),
    CONSTRAINT PK_facultad PRIMARY KEY cod_facultad
);

CREATE SEQUENCE Seq_facultad 
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Carrera (
    cod_carrera    NUMBER NOT NULL,
    cod_facultad   NUMBER NOT NULL,
    nombre         VARCHAR2(50) NOT NULL,
    descripcion    VARCHAR2(200),
    CONSTRAINT PK_Carrera PRIMARY KEY (cod_carrera, cod_facultad),
    CONSTRAINT FK_FacultadCarrera FOREIGN KEY (cod_facultad) REFERENCE Facultad(cod_facultad)
);

CREATE SEQUENCE Seq_carrera
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Ciencia (
    cod_ciencia           NUMBER NOT NULL,
    nombre                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200),
    cod_carrera           NUMBER NOT NULL,
    CONSTRAINT PK_Ciencia PRIMARY KEY cod_ciencia,
    CONSTRAINT FK_CarreraCiencia FOREIGN KEY (cod_carrera) REFERENCE Carrera(cod_carrera);
);

CREATE SEQUENCE Seq_ciencia
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Chat (
    cod_emisor                 NUMBER NOT NULL,
    cod_receptor               NUMBER NOT NULL,
    url_chat               VARCHAR2(100) NOT NULL,
    fecha_creacion         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Chat PRIMARY KEY (cod_emisor, cod_receptor),
    CONSTRAINT FK_UsuarioChatE FOREIGN KEY (cod_emisor) REFERENCE Usuario(cod_usuario),
    CONSTRAINT FK_UsuarioChatR FOREIGN KEY (cod_receptor) REFERENCE Usuario(cod_usuario)
);

CREATE TABLE Detalle_cargo (
    cod_usuario           NUMBER NOT NULL,
    cod_cargo             NUMBER NOT NULL,
    cod_carrera           NUMBER NOT NULL,
    CONSTRAINT PK_DetalleCargo PRIMARY KEY (cod_usuario, cod_cargo, cod_carrera),
    CONSTRAINT FK_UsuarioDetalleCargo FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario),
    CONSTRAINT FK_CargoDetalleCargo FOREIGN KEY (cod_cargo) REFERENCE Cargo(cod_cargo),
    CONSTRAINT FK_CarreraDetalleCargo FOREIGN KEY (cod_carrera) REFERENCE Carrera(cod_carrera)
);

CREATE TABLE Detalle_ciencia ( 
    cod_usuario                         NUMBER NOT NULL, 
    cod_carrera                         NUMBER NOT NULL,
    cod_cargo                           NUMBER NOT NULL,
    cod_ciencia                         NUMBER NOT NULL,
    CONSTRAINT PK_DetalleCiencia PRIMARY KEY (cod_usuario, cod_carrera, cod_cargo, cod_ciencia),
    CONSTRAINT FK_UsuarioDetalleCiencia FOREIGN KEY (cod_usuario) REFERENCE Detalle_cargo(cod_usuario),
    CONSTRAINT FK_CargoDetalleCiencia FOREIGN KEY (cod_cargo) REFERENCE Detalle_cargo(cod_cargo),
    CONSTRAINT FK_CarreraDetalleCiencia FOREIGN KEY (cod_carrera) REFERENCE Detalle_cargo(cod_carrera),
    CONSTRAINT FK_CienciaDetalleCiencia FOREIGN KEY (cod_ciencia) REFERENCE Detalle_cargo(cod_ciencia)
);

CREATE TABLE Tema (
    cod_tema              NUMBER NOT NULL,
    cod_usuario           NUMBER NOT NULL,
    titulo                VARCHAR2(50) NOT NULL,
    descripcion           VARCHAR2(200) NOT NULL,
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_cierre          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Tema PRIMARY KEY (cod_tema, cod_usuario),
    CONSTRAINT FK_UsuarioTema FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE SEQUENCE Seq_tema
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Src_tema (
    cod_tema                   NUMBER NOT NULL,
    url_imagen                 VARCHAR2(100) NOT NULL,
    tag                        VARCHAR2(50),
    cod_usuario                NUMBER NOT NULL,
    CONSTRAINT PK_SrcTema PRIMARY KEY cod_tema,
    CONSTRAINT FK_TemaSrc FOREIGN KEY (cod_tema) REFERENCE Tema(cod_tema),
    CONSTRAINT FK_UsuarioSrc FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE TABLE Etiqueta (
    cod_tema                   NUMBER NOT NULL,
    cod_ciencia                NUMBER NOT NULL,
    cod_usuario                NUMBER NOT NULL,
    CONSTRAINT PK_Etiqueta PRIMARY KEY (cod_tema, cod_ciencia),
    CONSTRAINT FK_TemaEtiqueta FOREIGN KEY (cod_tema) REFERENCE Tema(cod_tema),
    CONSTRAINT FK_CienciaTema FOREIGN KEY (cod_ciencia) REFERENCE Ciencia(cod_ciencia),
    CONSTRAINT FK_UsuarioEtiqueta FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE TABLE Comentario (
    cod_comentario             NUMBER NOT NULL,
    contenido                  VARCHAR2(200),
    url_imagen                 VARCHAR2(100),
    tag                        VARCHAR2(50),
    cod_tema                   NUMBER NOT NULL,
    cod_usuario                NUMBER NOT NULL
    CONSTRAINT PK_Comentario PRIMARY KEY cod_comentario,
    CONSTRAINT FK_TemaComentario FOREIGN KEY (cod_tema) REFERENCE Tema(cod_tema),
    CONSTRAINT FK_UsuarioComentario FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE SEQUENCE Seq_comentario
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Examen (
    cod_examen            NUMBER NOT NULL,
    cod_usuario           NUMBER NOT NULL,
    titulo                CLOB NOT NULL,
    tema                  CLOB NOT NULL,
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tiempo                NUMBER NOT NULL,
    duracion              NUMBER NOT NULL,
    activo                CHAR(1) NOT NULL,
    CONSTRAINT PK_Examen PRIMARY KEY (cod_examen, cod_usuario),
    CONSTRAINT FK_UsuarioExamen FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE SEQUENCE Seq_Examen 
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Tipo_pregunta (
    cod_tipo_pregunta   NUMBER NOT NULL,
    nombre              VARCHAR2(50) NOT NULL,
    CONSTRAINT PK_TipoP PRIMARY KEY cod_tipo_pregunta
);

CREATE SEQUENCE Seq_tipop
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Pregunta (
    cod_pregunta                      NUMBER NOT NULL,
    cod_tipo_pregunta                 NUMBER NOT NULL,
    descripcion                       VARCHAR2(200), 
    CONSTRAINT PK_Pregunta PRIMARY KEY (cod_pregunta, cod_tipo_pregunta),
    CONSTRAINT FK_TipopPregunta FOREIGN KEY (cod_tipo_pregunta) REFERENCE Tipo_pregunta(cod_tipo_pregunta)
);

CREATE SEQUENCE Seq_pregunta
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE Detalle_pregunta (
    cod_pregunta          NUMBER NOT NULL,
    cod_examen            NUMBER NOT NULL,
    cod_usuario           NUMBER NOT NULL
    fecha_creacion        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_DetalleP PRIMARY KEY (cod_pregunta, cod_examen, cod_usuario),
    CONSTRAINT FK_PreguntaDetallep FOREIGN KEY (cod_pregunta) REFERENCE Pregunta(cod_pregunta),
    CONSTRAINT FK_ExamenDetallep FOREIGN KEY (cod_examen) REFERENCE Examen(cod_examen),
    CONSTRAINT FK_UsuarioDetallep FOREIGN KEY (cod_usuario) REFERENCE Usuario(cod_usuario)
);

CREATE TABLE Respuesta (
    cod_respuesta   NUMBER NOT NULL
    respuesta       VARCHAR2(100) NOT NULL,
    correcta        CHAR(1) NOT NULL,
    CONSTRAINT PK_Respuesta PRIMARY KEY cod_respuesta
);

CREATE SEQUENCE Seq_Respuesta
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 10;

CREATE TABLE DetalleRP (
    cod_pregunta              NUMBER NOT NULL,
    cod_respuesta             NUMBER NOT NULL,
    correcta                  CHAR(1) NOT NULL,
    CONSTRAINT PK_DetalleRP PRIMARY KEY (cod_pregunta, cod_respuesta),
    CONSTRAINT FK_PreguntaDetalleRP FOREIGN KEY (cod_pregunta) REFERENCE Pregunta(cod_pregunta),
    CONSTRAINT FK_RespuestaDetalleRP FOREIGN KEY (cod_respuesta) REFERENCE Respuesta(cod_respuesta)
);