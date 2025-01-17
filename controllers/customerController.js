const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.getCustomer = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
}