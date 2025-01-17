const auth = require('../middleware/auth');
const {
    Customer,
    validate
} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

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

router.post('/', auth, async (req, res) => {
    const {
        error
    } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    await customer.save();

    res.send(customer);
});

router.put('/:id', auth, async (req, res) => {
    const {
        error
    } = validate(req.body);

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

router.delete('/:id', auth, async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) return res.status(404).send('Invalid ID');

    res.send(customer);
});


module.exports = router;