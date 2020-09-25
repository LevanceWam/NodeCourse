const {
    Rental
} = require('../models/rental');
const {
    Movie
} = require('../models/movies');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const moment = require('moment');
const Joi = require('joi');
const validate = require('../middleware/validate');

router.post('/', [auth, validate(validateRental)], async (req, res) => {

    const rental = await Rental.findOne({
        'customer._id': req.body.customerId,
        'movie._id': req.body.movieId
    });

    if (!rental) return res.status(404).send('Rental not Found');

    if (rental.dateReturned) return res.status(400).send('Return already exist');

    rental.dateReturned = new Date();
    const rentalDays = moment().diff(rental.dateOut, 'days')
    rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;

    await rental.save();

    await Movie.update({
        _id: rental.movie._id
    }, {
        $inc: {
            numberInStock: 1
        }
    });

    return res.status(200).send(rental);
});


function validateRental(req) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required(),
    }

    return Joi.validate(req, schema);
}

module.exports = router;