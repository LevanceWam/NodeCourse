require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const error = require('./middleware/error');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const app = express();
const genre = require('./routes/genres');
const home = require('./routes/home');
const customer = require('./routes/customers');
const movie = require('./routes/movies');
const rental = require('./routes/rental');
const users = require('./routes/users');
const auth = require('./routes/auth');

process.on('uncaughtException', (ex) => {
    console.log('WE GOT AN UNCAUGHT EXPECTION');
    winston.error(ex.message, ex);
});

winston.add(winston.transports.File, {
    filename: 'logfile.log'
});

winston.add(winston.transports.MongoDB, {
    db: 'mongodb://localhost/wamVid'
});

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivatekey is not def')
    process.exit(1);
}

mongoose.connect('mongodb://localhost/wamVid')
    .then(() => console.log('connected to mongo'));

app.use(express.json());
app.use('/', home);
app.use('/api/genre', genre);
app.use('/api/customer', customer);
app.use('/api/movie', movie);
app.use('/api/rental', rental);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(error);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))