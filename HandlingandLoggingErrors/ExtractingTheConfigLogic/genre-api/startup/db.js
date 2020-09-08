const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
    mongoose.connect('mongodb://localhost/wamVid')
        .then(() => winston.info('Connected to MongoDB'));
}