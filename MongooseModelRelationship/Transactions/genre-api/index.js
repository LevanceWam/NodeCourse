const mongoose = require('mongoose');
const express = require('express');
const app = express();
const genre = require('./routes/genres');
const home = require('./routes/home');
const customer = require('./routes/customers');
const movie = require('./routes/movies');
const rental = require('./routes/rental');

mongoose.connect('mongodb://localhost/wamVid')
    .then(() => console.log('connected to mongo'));

app.use(express.json());
app.use('/', home);
app.use('/api/genre', genre);
app.use('/api/customer', customer);
app.use('/api/movie', movie);
app.use('/api/rental', rental);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))