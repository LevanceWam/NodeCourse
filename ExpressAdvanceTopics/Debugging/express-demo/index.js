const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan');
const express = require('express');
const app = express();

if (app.get('env' === 'development')) {
    app.use(morgan('tiny'));
    startUpDebugger('Morgan enabled...');
}

// Db work...
dbDebugger('Connected to the database...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));