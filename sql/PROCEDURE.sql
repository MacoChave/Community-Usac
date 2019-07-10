CREATE OR REPLACE PROCEDURE PROC_C_USUARIO (
    i_codigo OUT NUMBER,
    i_carnet IN NUMBER, 
    i_registro IN NUMBER, 
    i_nombre in VARCHAR2, 
    i_url_foto in VARCHAR2, 
    i_correo in VARCHAR2, 
    i_telefono IN NUMBER, 
    i_clave in VARCHAR2, 
    i_rol in NUMBER
)
IS 
BEGIN 
    INSERT INTO Usuario 
        (carnet, no_registro, nombre, url_foto, correo, telefono, clave, cod_rol) 
    VALUES 
        (i_carnet, i_registro, i_nombre, i_url_foto, i_correo, i_telefono, i_clave, i_rol);

    i_codigo := SEQ_USUARIO.CURRVAL;
END;

CREATE OR REPLACE PROCEDURE PROC_C_CARRERA (
    i_facultad IN NUMBER,
    i_nombre IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN
    INSERT INTO Carrera 
        (nombre, descripcion, cod_facultad)
    VALUES 
        (i_nombre, i_descripcion, i_facultad);
END;

CREATE OR REPLACE PROCEDURE PROC_U_CARRERA (
    i_carrera IN NUMBER,
    i_facultad IN NUMBER,
    i_nombre IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN
    UPDATE Carrera 
    SET 
        nombre = i_nombre, 
        descripcion = i_descripcion 
    WHERE 
        cod_carrera = i_carrera AND 
        cod_facultad = i_facultad;
END;

CREATE OR REPLACE PROCEDURE PROC_C_CIENCIA (
    i_nombre IN VARCHAR2, 
    i_descripcion IN VARCHAR2, 
    i_facultad IN NUMBER, 
    i_carrera IN NUMBER
)
IS 
BEGIN
    INSERT INTO Ciencia 
        (nombre, descripcion, cod_carrera, cod_facultad)
    VALUES 
        (i_nombre, i_descripcion, i_carrera, i_facultad);
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

CREATE OR REPLACE PROCEDURE PROC_C_CHAT (
    i_emisor IN NUMBER,
    i_receptor IN NUMBER,
    i_chat IN VARCHAR2
)
IS 
BEGIN 
    INSERT INTO Chat 
        (cod_emisor, cod_receptor, url_chat)
    VALUES 
        (i_emisor, i_receptor, i_chat);
END;

CREATE OR REPLACE PROCEDURE PROC_C_DETALLE_CARGO (
    i_usuario IN NUMBER,
    i_cargo IN NUMBER,
    i_facultad IN NUMBER,
    i_carrera IN NUMBER
)
IS
BEGIN 
    INSERT INTO Detalle_cargo 
        (cod_usuario, cod_cargo, cod_facultad, cod_carrera) 
    VALUES 
        (i_usuario, i_cargo, i_facultad, i_carrera);
END;

CREATE OR REPLACE PROCEDURE PROC_C_ASIGNACION(
    i_usuario IN NUMBER,
    i_ciencia IN NUMBER,
    i_facultad IN NUMBER,
    i_carrera IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Asignacion 
        (cod_usuario, cod_ciencia, cod_facultad, cod_carrera)
    VALUES 
        (i_usuario, i_ciencia, i_facultad, i_carrera);
END;

CREATE OR REPLACE PROCEDURE PROC_C_TEMA(
    i_codigo OUT NUMBER,
    i_usuario IN NUMBER,
    i_titulo IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN 
    INSERT INTO Tema 
        (cod_usuario, titulo, descripcion, fecha_cierre)
    VALUES 
        (i_usuario, i_titulo, i_descripcion, null);
    
    i_codigo := SEQ_TEMA.currval;
    
EXCEPTION
    WHEN OTHERS THEN i_codigo := 0;
END PROC_C_TEMA;

CREATE OR REPLACE PROCEDURE PROC_U_TEMA(
    i_cod_tema IN NUMBER,
    i_titulo IN VARCHAR2,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Tema
    SET 
        titulo = i_titulo, 
        descripcion = i_descripcion
    WHERE 
        Tema.cod_tema = i_cod_tema;
            
END PROC_U_TEMA;

CREATE OR REPLACE PROCEDURE PROC_D_TEMA(
    i_cod_tema IN NUMBER,
    i_motivo IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Tema 
    SET 
        motivo_cierre = i_motivo, 
        fecha_cierre = CURRENT_TIMESTAMP
    WHERE 
        Tema.cod_tema = i_cod_tema;
            
END PROC_D_TEMA;

CREATE OR REPLACE PROCEDURE PROC_C_SRCTEMA(
    i_image IN VARCHAR2,
    i_tag IN VARCHAR2,
    i_tema IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Src_tema 
        (url_imagen, tag, cod_tema) 
    VALUES 
        (i_image, i_tag, i_tema);
END PROC_C_SRCTEMA;

CREATE OR REPLACE PROCEDURE PROC_U_SRCTEMA(
    i_src_tema IN NUMBER,
    i_image IN VARCHAR2,
    i_tag IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Src_tema 
    SET 
        url_imagen = i_image, 
        tag = i_tag
    WHERE cod_source = i_src_tema;
END PROC_U_SRCTEMA;

CREATE OR REPLACE PROCEDURE PROC_C_ETIQUETA(
    i_tema IN NUMBER,
    i_ciencia IN NUMBER,
    i_facultad IN NUMBER,
    i_carrera IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Etiqueta 
        (cod_tema, cod_ciencia, cod_facultad, cod_carrera)
    VALUES 
        (i_tema, i_ciencia, i_facultad, i_carrera);
END PROC_C_ETIQUETA;

CREATE OR REPLACE PROCEDURE PROC_C_COMENTARIO(
    i_codigo OUT NUMBER,
    i_contendido IN VARCHAR2,
    i_imagen IN VARCHAR2,
    i_tag IN VARCHAR2,
    i_tema IN NUMBER,
    i_usuario IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Comentario 
        (contenido, url_imagen, tag, cod_tema, cod_usuario)
    VALUES 
        (i_contendido, i_imagen, i_tag, i_tema, i_usuario);  
    
    i_codigo := SEQ_COMENTARIO.currval;
END PROC_C_COMENTARIO;

CREATE OR REPLACE PROCEDURE PROC_U_COMENTARIO(
    i_cod_comentario IN NUMBER,
    i_contendido IN VARCHAR2,
    i_imagen IN VARCHAR2,
    i_tag IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Comentario 
    SET 
        contenido = i_contendido, 
        url_imagen = i_imagen, 
        tag = i_tag 
    WHERE 
        cod_comentario = i_cod_comentario;  
END PROC_U_COMENTARIO;

CREATE OR REPLACE PROCEDURE PROC_C_EXAMEN(
    i_codigo OUT NUMBER,
    i_titulo IN VARCHAR2,
    i_tema IN VARCHAR2,
    i_duracion IN NUMBER,
    i_log IN VARCHAR2,
    i_usuario IN NUMBER,
    i_ciencia IN NUMBER,
    i_facultad IN NUMBER,
    i_carrera IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Examen 
        (cod_usuario, titulo, tema, duracion, log, cod_ciencia, cod_facultad, cod_carrera)
    VALUES 
        (i_usuario, i_titulo, i_tema, i_duracion, i_log, i_ciencia, i_facultad, i_carrera);

    i_codigo := SEQ_EXAMEN.currval;
END PROC_C_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_U_EXAMEN(
    i_cod_examen IN NUMBER,
    i_titulo IN VARCHAR2,
    i_tema IN VARCHAR2,
    i_duracion IN NUMBER
)
IS 
BEGIN 
    UPDATE Examen 
    SET
        titulo = i_titulo, 
        tema = i_tema, 
        duracion = i_duracion, 
        fecha_modificacion = CURRENT_TIMESTAMP
    WHERE 
        cod_examen = i_cod_examen;
END PROC_U_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_D_EXAMEN(
    i_cod_examen IN NUMBER
)
IS 
BEGIN 
    UPDATE Examen 
    SET
        estado = 'D'
    WHERE 
        cod_examen = i_cod_examen;
END PROC_D_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_L_EXAMEN(
    i_cod_examen IN NUMBER, 
    i_sala IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Examen 
    SET
        estado = 'l', 
        sala = i_sala
    WHERE 
        cod_examen = i_cod_examen;
END PROC_D_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_C_PREGUNTA(
    i_codigo OUT NUMBER,
    i_descripcion IN VARCHAR2,
    i_tipo IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Pregunta 
        (descripcion, cod_tipo_pregunta)
    VALUES 
        (i_descripcion, i_tipo);
    
    i_codigo := SEQ_PREGUNTA.currval;
END PROC_C_PREGUNTA;

CREATE OR REPLACE PROCEDURE PROC_U_PREGUNTA(
    i_cod_pregunta IN NUMBER,
    i_descripcion IN VARCHAR2
)
IS 
BEGIN 
    UPDATE Pregunta 
    SET 
        descripcion = i_descripcion;
END PROC_U_PREGUNTA;

CREATE OR REPLACE PROCEDURE PROC_C_DETALLEPREG(
    i_pregunta IN NUMBER,
    i_examen IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Detalle_pregunta 
        (cod_pregunta, cod_examen)
    VALUES 
        (i_pregunta, i_examen);
END PROC_C_DETALLEPREG;

CREATE OR REPLACE PROCEDURE PROC_C_DETALLERES(
    i_pregunta IN NUMBER,
    i_respuesta IN NUMBER,
    correcta IN NUMBER
)
IS 
BEGIN 
    INSERT INTO Detalle_respuesta 
        (cod_pregunta, cod_respuesta, correcta)
    VALUES 
        (i_pregunta, i_respuesta, correcta);
END;