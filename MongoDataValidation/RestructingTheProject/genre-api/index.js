const mongoose = require('mongoose');
const express = require('express');
const app = express();
const genre = require('./routes/genres');
const home = require('./routes/home');
const customer = require('./routes/customers');

mongoose.connect('mongodb://localhost/wamVid')
    .then(() => console.log('connected to mongo'));

app.use(express.json());
app.use('/', home);
app.use('/api/genre', genre);
app.use('/api/customer', customer);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))