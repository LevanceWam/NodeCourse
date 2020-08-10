const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground') // this returns a promise 
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connnect to MongoDB...', err));