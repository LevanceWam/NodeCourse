const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const router = express.Router()

const Customer = mongoose.model('Customer', new mongoose.Schema({
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
}));

router.get('/', async (req, res) => {
    const customers = await Customer
        .find()
        .sort({
            name: 1
        });

    res.send(customers);
});

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).send('Invalid ID');

    res.send(customer);
});

router.post('/', async (req, res) => {
    const {
        error
    } = validateCustomer(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();

    res.send(customer);
});

router.put('/:id', async (req, res) => {
    const {
        error
    } = validateCustomer(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    if (!customer) return res.status(404).send('Invalid ID');

    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        phone: req.body.phone
    }, {
        isGold: req.body.isGold
    }, {
        new: true
    });
});

router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) return res.status(404).send('Invalid ID');

    res.send(customer);
});

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).required(),
        phone: Joi.string().min(3).required(),
        isGold: Joi.boolean()
    }

    return Joi.validate(customer, schema);
}

module.exports = router;