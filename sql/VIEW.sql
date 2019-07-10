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
    
CREATE OR REPLACE VIEW VIEW_CIENCIA AS 
SELECT 
    m.cod_ciencia, m.nombre, m.descripcion, c.nombre AS carrera, f.nombre AS facultad
FROM 
    Ciencia M, Carrera C, Facultad F
WHERE 
    m.cod_carrera = c.cod_carrera AND 
    m.cod_facultad = f.cod_facultad;

CREATE OR REPLACE VIEW VIEW_DETALLE_CARGO AS 
SELECT u.nombre, r.cargo, c.nombre, f.nombre
FROM 
    detalle_cargo DC, Usuario U, Cargo R, Carrera C, Facultad F
WHERE 
    dc.cod_usuario = u.cod_usuario AND 
    dc.cod_cargo = r.cod_cargo AND 
    dc.cod_carrera = c.cod_carrera AND 
    dc.cod_facultad = f.cod_facultad;

CREATE OR REPLACE VIEW VIEW_ASIGNACION AS 
SELECT 
    u.nombre AS usuario, c.nombre AS ciencia, f.nombre AS facultad, c.nombre AS carrera 
FROM 
    Asignacion A, Usuario U, Ciencia M, Facultad F, Carrera C  
WHERE 
    a.cod_usuario = u.cod_usuario AND 
    a.cod_ciencia = m.cod_ciencia AND 
    a.cod_facultad = f.cod_facultad AND 
    a.cod_carrera = c.cod_carrera;

CREATE VIEW VIEW_TEMA AS 
SELECT 
    t.cod_tema, u.cod_usuario, u.nombre AS usuario, t.titulo, t.descripcion, t.fecha_creacion, t.fecha_cierre, t.motivo_cierre 
FROM 
    Tema T, Usuario U
WHERE 
    t.cod_usuario = u.cod_usuario;

CREATE VIEW VIEW_SRC_TEMA AS 
SELECT 
    st.cod_source, st.url_imagen, st.tag, t.titulo
FROM 
    Src_tema ST, Tema T 
WHERE 
    st.cod_tema = t.cod_tema;

CREATE OR REPLACE VIEW VIEW_ETIQUETA AS 
SELECT 
    t.titulo AS tema, m.nombre AS ciencia, f.nombre AS facultad, c.nombre AS carrera 
FROM 
    Etiqueta E, Tema T, Ciencia M, Facultad F, Carrera C 
WHERE 
    e.cod_tema = t.cod_tema AND 
    e.cod_ciencia = m.cod_ciencia AND
    e.cod_facultad = f.cod_facultad AND 
    e.cod_carrera = c.cod_carrera;

CREATE VIEW VIEW_COMENTARIO AS 
SELECT 
    c.cod_comentario, c.contenido, c.url_imagen, c.tag, c.fecha_creacion, 
    t.titulo, u.nombre, u.url_foto
FROM 
    Comentario C, Tema T, Usuario U 
WHERE 
    c.cod_tema = t.cod_tema AND 
    c.cod_usuario = u.cod_usuario;

CREATE OR REPLACE VIEW VIEW_EXAMEN AS 
SELECT 
    e.cod_examen, e.titulo, e.sala, e.tema, e.fecha_creacion, e.fecha_modificacion, 
    e.duracion, e.estado, e.log, m.nombre AS ciencia, c.nombre AS carrera, 
    f.nombre AS facultad, u.nombre, u.url_foto
FROM
    Examen E, Usuario U, Ciencia M, Carrera C, Facultad F 
WHERE 
    e.cod_usuario = u.cod_usuario AND 
    e.cod_ciencia = m.cod_ciencia AND 
    e.cod_facultad = f.cod_facultad AND 
    e.cod_carrera = c.cod_carrera;

CREATE OR REPLACE VIEW VIEW_PREGUNTA AS 
SELECT p.cod_pregunta, p.descripcion, tp.nombre AS tipo 
FROM 
    Pregunta P, Tipo_pregunta TP 
WHERE 
    p.cod_tipo_pregunta = tp.cod_tipo_pregunta;

CREATE OR REPLACE VIEW VIEW_DETALLEPREG AS 
SELECT 
    dt.cod_pregunta, e.titulo AS examen, 
    p.descripcion AS pregunta, tp.nombre AS tipo
FROM 
    Detalle_pregunta DT, Pregunta P, Examen E, 
    Tipo_pregunta TP
WHERE 
    dt.cod_pregunta = p.cod_pregunta AND 
    dt.cod_examen = e.cod_examen AND 
    p.cod_tipo_pregunta = tp.cod_tipo_pregunta;

CREATE VIEW VIEW_DETALLERES AS 
SELECT 
    p.descripcion AS pregunta, r.respuesta, dr.correcta
FROM 
    Detalle_respuesta DR, Pregunta P, Respuesta R 
WHERE 
    dr.cod_pregunta = p.cod_pregunta AND 
    dr.cod_respuesta = r.cod_respuesta;