const Billing = require('../models/Billing');
const Customer = require('../models/Customer');
const Product = require('../models/Product');

exports.createBilling = async (req, res) => {
    try {
        const billing = new Billing(req.body);
        await billing.save();
        res.status(201).send(billing);
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.getBilling = async (req, res) => {
    try {
        const billing = await Billing.find().populate('customer').populate('products.product');
        res.send(billing);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.updateBilling = async (req, res) => {
    try {
        const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!billing) {
            return res.status(404).send('Billing record not found');
        }
        res.send(billing);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteBilling = async (req, res) => {
    try {
        const billing = await Billing.findByIdAndDelete(req.params.id);
        if (!billing) {
            return res.status(404).send('Billing record not found');
        }
        res.send(billing);
    } catch (error) {
        res.status(500).send(error);
    }
}