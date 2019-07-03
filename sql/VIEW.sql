CREATE VIEW VIEW_USUARIO AS
SELECT 
    u.cod_usuario, u.carnet, u.no_registro, u.nombre, u.url_foto, u.correo, u.telefono, u.clave, r.rol
FROM 
    Usuario U, Rol R 
WHERE 
    u.cod_rol = r.cod_rol;

CREATE VIEW VIEW_CARRERA AS
SELECT 
    c.cod_carrera, f.nombre AS facultad, c.nombre, c.descripcion
FROM Carrera C, Facultad F
WHERE 
    c.cod_facultad = f.cod_facultad;
    
CREATE VIEW VIEW_CIENCIA AS 
SELECT 
    m.nombre, m.descripcion, c.nombre AS carrera, f.nombre AS facultad
FROM 
    Ciencia M, Carrera C, Facultad F
WHERE 
    m.cod_carrera = c.cod_carrera AND 
    m.cod_facultad = f.cod_facultad;

CREATE VIEW VIEW_DETALLE_CARGO AS 
SELECT u.nombre, r.cargo, f.nombre AS facultad, c.nombre AS carrera
FROM 
    Detalle_cargo DC, Usuario u, Cargo R, Facultad F, Carrera C 
WHERE 
    dc.cod_usuario = u.cod_usuario AND 
    dc.cod_cargo = r.cod_cargo AND 
    dc.cod_facultad = f.cod_facultad AND 
    dc.cod_carrera = c.cod_carrera;

CREATE VIEW VIEW_ASIGNACION AS 
SELECT 
    u.nombre AS usuario, c.nombre AS ciencia 
FROM 
    Asignacion A, Usuario U, Ciencia C 
WHERE 
    a.cod_usuario = u.cod_usuario AND 
    a.cod_ciencia = c.cod_ciencia;

CREATE VIEW VIEW_TEMA AS 
SELECT 
    u.nombre AS usuario, t.titulo, t.descripcion, t.fecha_creacion, t.fecha_cierre 
FROM 
    Tema T, Usuario U
WHERE 
    t.cod_usuario = u.cod_usuario;

CREATE VIEW VIEW_SRC_TEMA AS 
SELECT 
    st.cod_srs_tema, st.url_imagen, st.tag, t.titulo
FROM 
    Src_tema ST, Tema T 
WHERE 
    st.cod_tema = t.cod_tema;

CREATE VIEW VIEW_ETIQUETA AS 
SELECT 
    t.titulo AS Tema, c.nombre AS ciencia 
FROM 
    Etiqueta E, Tema T, Ciencia C 
WHERE 
    e.cod_tema = t.cod_tema AND 
    e.cod_ciencia = c.cod_ciencia;

CREATE VIEW VIEW_COMENTARIO AS 
SELECT 
    c.contenido, c.url_imagen, c.tag, c.fecha_creacion, 
    t.titulo, u.nombre, u.url_foto
FROM 
    Comentario C, Tema T, Usuario U 
WHERE 
    c.cod_tema = t.cod_tema AND 
    c.cod_usuario = u.cod_usuario;

CREATE VIEW VIEW_EXAMEN AS 
SELECT 
    e.titulo, e.tema, e.fecha_creacion, e.fecha_modificacion, 
    e.tiempo, e.duracion, e.activo, e.log, u.nombre, u.url_foto
FROM
    Examen E, Usuario U 
WHERE 
    e.cod_usuario = u.cod_usuario;

CREATE VIEW VIEW_PREGUNTA AS 
SELECT p.descripcion, tp.nombre AS tipo 
FROM 
    Pregunta P, Tipo_pregunta TP 
WHERE 
    p.cod_tipo_pregunta = tp.cod_tipo_pregunta;

CREATE VIEW VIEW_DETALLEPREG AS 
SELECT 
    e.titulo AS examen, p.descripcion AS pregunta, 
    tp.nombre AS tipo, u.nombre AS creador, u.url_foto, 
    dp.fecha_creacion
FROM 
    Detalle_pregunta DT, Pregunta P, Examen E, Usuario U, 
    TP Tipo_pregunta
WHERE 
    dt.cod_pregunta = p.cod_pregunta AND 
    dt.cod_examen = e.cod_examen AND 
    dt.cod_usuario = u.cod_usuario AND 
    p.cod_tipo_pregunta = tp.cod_tipo_pregunta;

CREATE VIEW VIEW_DETALLERES AS 
SELECT 
    p.descripcion AS pregunta, r.respuesta, dr.correcta
FROM 
    Detalle_respuesta DR, Pregunta P, Respuesta R 
WHERE 
    dr.cod_pregunta = p.cod_pregunta AND 
    dr.cod_respuesta = r.cod_respuesta;