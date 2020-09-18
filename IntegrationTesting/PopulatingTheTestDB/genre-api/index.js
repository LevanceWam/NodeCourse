const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validate')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`listening on port ${port}....`));

module.exports = server;