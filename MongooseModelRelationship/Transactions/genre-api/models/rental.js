const Joi = require('joi');
const mongoose = require('mongoose');

// the reason why we are not pulling/reusing the objects we previously made is
// because if we wind up having a lot of properties in them we are not going to want to 
// load all of that information so here we are choosing what we want to display

// The way we pull the information for each object from the other databases is their id #

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 50
            },
            phone: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                required: true
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            },
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
}));

function validateRental(rental) {
    const schema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required(),
    }

    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;