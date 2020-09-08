require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const app = express();

require('./startup/routes')(app);

winston.handleExceptions(
    new winston.transports.File({
        filename: 'uncaughtException.log'
    })
);

process.on('unhandledRejection', (ex) => {
    throw ex;
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


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))