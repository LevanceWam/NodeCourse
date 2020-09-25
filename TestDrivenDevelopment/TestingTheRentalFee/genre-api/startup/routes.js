const express = require('express');
const genre = require('../routes/genres');
const home = require('../routes/home');
const customer = require('../routes/customers');
const movie = require('../routes/movies');
const rental = require('../routes/rental');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');
const returns = require('../routes/returns');

module.exports = function (app) {
    app.use(express.json());
    app.use('/', home);
    app.use('/api/genre', genre);
    app.use('/api/customer', customer);
    app.use('/api/movie', movie);
    app.use('/api/rental', rental);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/returns', returns);

    app.use(error);
}