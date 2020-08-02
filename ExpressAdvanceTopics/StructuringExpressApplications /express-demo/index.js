const debug = require('debug');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require("joi");
const home = require('./routes/homepage');
const logger = require("./middleware/logger");
const courses = require('./routes/courses');
const auth = require("./middleware/auth");
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enable');
}

app.use(logger);
app.use(auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));