const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const genres = [{
        id: 1,
        name: 'action'
    },
    {
        id: 2,
        name: 'horror'
    },
    {
        id: 3,
        name: 'comedy'
    }
];

app.get('/', (req, res) => res.send('Hello How Are You Today!'));

app.get('/api/genres', (req, res) => res.send(genres));

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Sorry invalid ID');
    res.send(genre);
});

app.post('/api/genres', (req, res) => {
    const {
        error
    } = validateGenre(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
    const {
        error
    } = validateGenre(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Sorry invalid ID');

    genre.name = req.body.name;
    res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Sorry invalid ID');

    const position = genres.indexOf(genre);
    genres.splice(position, 1);
    res.send(genre);
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);

}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));