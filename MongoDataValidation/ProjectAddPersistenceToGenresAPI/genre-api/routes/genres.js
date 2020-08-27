const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');



// since this is the only place we are refencing the schema we can make the model here and have the code look clean
const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

// return all the genres 
router.get('/', async (req, res) => {
    const genres = await Genre
        .find()
        .sort({
            name: 1
        });

    res.send(genres)
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('Invalid ID');

    res.send(genre);
});

router.post('/', async (req, res) => {
    const {
        error
    } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // here we have a reset to the genre object that way we can create new objects everytime
    let genre = new Genre({
        name: req.body.name
    });
    genre = await genre.save();

    res.send(genre);

});

router.put('/:id', async (req, res) => {
    const {
        error
    } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });

    if (!genre) return res.status(404).send('Invalid ID');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id)

    if (!genre) return res.status(404).send('Invalid ID');

    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(genre, schema);
}

module.exports = router;