const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// SETTINGS
app.set('port', 3000);
app.set('json spaces', 2);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use(require('./routes/index'));
app.use('/api/cargo', require('./routes/cargo'));
app.use('/api/rol', require('./routes/rol'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/facultad', require('./routes/facultad'));
app.use('/api/carrera', require('./routes/carrera'));
app.use('/api/ciencia', require('./routes/ciencia'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/cargo_detalle', require('./routes/detalle_cargo'));
app.use('/api/usuario_asignacion', require('./routes/asignacion'));
app.use('/app/tema', require('./routes/tema'));
app.use('/api/tema_source', require('./routes/src_tema'));
app.use('/api/tema_etiqueta', require('./routes/etiqueta'));
app.use('/api/tema_comentario', require('./routes/comentario'));
app.use('/api/examen', require('./routes/examen'));
app.use('/api/pregunta', require('./routes/pregunta'));
app.use('/api/pregunta_tipo', require('./routes/tipo_pregunta'));
app.use('/api/pregunta_detalle', require('./routes/detalle_pregunta'));
app.use('/api/respuesta', require('./routes/respuesta'));
app.use('/api/respuesta_detalle', require('./routes/detalle_respuesta'));

// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto 3000');
});