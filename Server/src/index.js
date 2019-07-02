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
app.use('/api/facultad', require('./routes/facultad'));
app.use('/api/carrera', require('./routes/carrera'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/ciencia', require('./routes/ciencia'));
app.use('/api/cargo', require('./routes/cargo'));

// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto 3000');
});