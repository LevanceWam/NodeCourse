require('express-async-errors');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivatekey is not def')
    process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))