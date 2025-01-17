const {
    Genre,
    validate
} = require('../models/genre'); // this is object destructing
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

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
    } = validate(req.body);
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
    } = validate(req.body);
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

module.exports = router;