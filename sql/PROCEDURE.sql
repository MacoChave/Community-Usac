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
            (cod_usuario, titulo, descripcion)
        VALUES 
            (s_usuario, i_titulo, i_descripcion);
    END IF;
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
    i_motivo IN VARCHAR2,
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

CREATE OR REPLACE PROCEDURE PROC_C_ETIQUETA(
    i_tema IN VARCHAR2,
    i_ciencia IN VARCHAR2
)
IS 
    s_tema NUMBER;
    s_ciencia NUMBER;
BEGIN 
    s_tema := 0;
    s_ciencia := 0;

    SELECT cod_tema INTO s_tema
    FROM Tema 
    Where titulo LIKE i_tema;

    SELECT cod_ciencia INTO s_ciencia
    FROM Ciencia 
    WHERE nombre LIKE i_ciencia;

    IF s_tema > 0 AND s_ciencia > 0 THEN 
        INSERT INTO Etiqueta 
            (cod_tema, cod_ciencia)
        VALUES 
            (s_tema, s_ciencia);
    END IF;
END PROC_C_ETIQUETA;

CREATE OR REPLACE PROCEDURE PROC_C_COMENTARIO(
    i_contendido IN VARCHAR2,
    i_imagen IN VARCHAR2,
    i_tag IN VARCHAR2,
    i_tema IN VARCHAR2,
    i_usuario IN VARCHAR2
)
IS 
    s_tema NUMBER;
    s_usuario NUMBER;
BEGIN 
    s_tema := 0;
    s_usuario := 0;

    SELECT cod_tema INTO s_tema
    FROM Tema 
    Where titulo LIKE i_tema;

    SELECT cod_usuario INTO s_usuario
    FROM Usuario
    WHERE nombre LIKE i_usuario;

    IF s_tema > 0 AND s_usuario > 0 THEN
        INSERT INTO Comentario 
            (contenido, url_imagen, tag, cod_tema, cod_usuario)
        VALUES 
            (i_contendido, i_imagen, i_tag, s_tema, s_usuario);
    END IF;
  
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
    i_usuario IN VARCHAR2,
    i_titulo IN VARCHAR2,
    i_tema IN VARCHAR2,
    i_tiempo IN NUMBER,
    i_duracion IN NUMBER,
    i_log IN VARCHAR2
)
IS 
    s_usuario NUMBER;
BEGIN 
    s_usuario := 0;

    SELECT cod_usuario INTO s_usuario
    FROM Usuario 
    WHERE nombre LIKE i_usuario;

    IF s_usuario > 0 THEN 
        INSERT INTO Examen 
            (cod_usuario, titulo, tema, tiempo, duracion, log)
        VALUES 
            (s_usuario, i_titulo, i_tema, i_tiempo, i_duracion, i_log);
    END IF;
END PROC_C_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_U_EXAMEN(
    i_cod_examen IN NUMBER,
    i_titulo IN VARCHAR2,
    i_tema IN VARCHAR2,
    i_tiempo IN NUMBER,
    i_duracion IN NUMBER
)
IS 
BEGIN 
    UPDATE Examen 
    SET
        titulo = i_titulo, 
        tema = i_tema, 
        tiempo = i_tiempo, 
        duracion = i_duracion
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
        activo = 0
    WHERE 
        cod_examen = i_cod_examen;
END PROC_D_EXAMEN;

CREATE OR REPLACE PROCEDURE PROC_C_PREGUNTA(
    i_descripcion IN VARCHAR2,
    i_tipo IN VARCHAR2
)
IS 
    s_tipo NUMBER;
BEGIN 
    s_tipo := 0;

    SELECT cod_tipo_pregunta INTO s_tipo
    FROM Tipo_pregunta 
    WHERE nombre LIKE i_tipo;

    IF s_tipo > 0 THEN 
        INSERT INTO Pregunta 
            (descripcion, cod_tipo_pregunta)
        VALUES 
            (i_descripcion, s_tipo);
    END IF;
END PROC_C_PREGUNTA;

CREATE OR REPLACE PROCEDURE PROC_U_PREGUNTA(
    i_cod_pregunta IN NUMBER,
    i_descripcion IN VARCHAR2,
    i_tipo IN VARCHAR2
)
IS 
    s_tipo NUMBER;
BEGIN 
    s_tipo := 0;

    SELECT cod_tipo_pregunta INTO s_tipo
    FROM Tipo_pregunta 
    WHERE nombre LIKE i_tipo;

    IF s_tipo > 0 THEN 
        UPDATE Pregunta 
        SET 
            descripcion = i_descripcion, 
            cod_tipo_pregunta = s_tipo;
    END IF;
END PROC_U_PREGUNTA;

CREATE OR REPLACE PROCEDURE PROC_C_DETALLEPREG(
    i_pregunta IN VARCHAR2,
    i_examen IN VARCHAR2,
    i_usuario IN VARCHAR2
)
IS 
    s_pregunta NUMBER;
    s_examen NUMBER;
    s_usuario NUMBER;
BEGIN 
    s_pregunta := 0;
    s_examen := 0;
    s_usuario := 0;

    SELECT cod_pregunta INTO s_pregunta
    FROM Pregunta 
    WHERE descripcion LIKE i_pregunta;

    SELECT cod_usuario INTO s_usuario
    FROM Usuario 
    WHERE nombre LIKE i_usuario;

    SELECT cod_examen INTO s_examen
    FROM Examen
    WHERE titulo LIKE i_examen;

    IF s_pregunta > 0 AND s_examen > 0 AND s_usuario > 0 THEN 
        INSERT INTO Detalle_pregunta 
            (cod_pregunta, cod_examen, cod_usuario)
        VALUES 
            (s_pregunta, s_examen, s_usuario);
    END IF;
END PROC_C_DETALLEPREG;

CREATE OR REPLACE PROCEDURE PROC_C_DETALLERES(
    i_pregunta IN VARCHAR2,
    i_respuesta IN VARCHAR2,
    correcta IN NUMBER
)
IS 
    s_pregunta := 0;
    s_respuesta := 0;
BEGIN 
    SELECT cod_pregunta INTO s_pregunta
    FROM Pregunta 
    WHERE descripcion LIKE i_pregunta;

    SELECT cod_respuesta INTO s_respuesta
    FROM Respuesta 
    WHERE respuesta LIKE i_respuesta;

    IF (s_pregunta > 0 AND s_respuesta > 0) THEN 
        INSERT INTO Detalle_respuesta 
            (cod_pregunta, cod_respuesta, correcta)
        VALUES 
            (s_pregunta, s_respuesta, correcta);
    END IF;
END PROC_C_RESPUESTA;

