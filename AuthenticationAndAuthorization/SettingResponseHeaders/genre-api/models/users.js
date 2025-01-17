const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 100
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 0,
        max: 255
    }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(3).required()
    }

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;