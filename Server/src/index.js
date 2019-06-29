const express = require('express');
const morgan = require('morgan');

const app = express();

// SETTINGS
app.set('port', 3000);
app.set('json spaces', 2);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ROUTES
app.use(require('./routes/index'));
app.use('/api/facultad', require('./routes/facultad'));
app.use('/api/carrera', require('./routes/carrera'));

// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto 3000');
});