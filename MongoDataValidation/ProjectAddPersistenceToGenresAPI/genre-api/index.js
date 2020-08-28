const mongoose = require('mongoose');
const express = require('express');
const app = express();
const genre = require('./routes/genres');
const home = require('./routes/home');

mongoose.connect('mongodb://localhost/wamVid');
app.use(express.json());
app.use('/', home);
app.use('/api/genre', genre);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`))