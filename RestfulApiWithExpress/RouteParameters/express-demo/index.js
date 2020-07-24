const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello There'));

app.get('/api/course', (req, res) => res.send([1, 3, 4]));

// here in the url we are defining the parameter to get a single course by it's id
app.get('/api/courses/:id', (req, res) => {
    // in order to read this parameter we use request.params.id
    res.send(req.params.id);
}); // back to notes at line 11 

// going to look at the req.params object
app.get('/api/posts/:year/:month', (req, res) => {
    // when this object returns we will see the year and month properties along with the values we provided
    res.send(req.params); // (back to notes line 30)
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query); // so instead of params we use query
    // we'll see that query parameters are stored in an object with a bunch of key value pairs
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}...`))