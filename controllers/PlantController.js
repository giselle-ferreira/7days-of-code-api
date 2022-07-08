const Plant = require('../models/Plant');
const { v4: uuid } = require('uuid');

module.exports = {
    async getAllPlants(req, res) {
        try {
            const plants = await Plant.find();
            return res.status(200).json({ plants });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async createPlant(req, res) {
        const { name, price, image } = req.body

        if(!name || !price || !image) {
            return res.status(400).json({ error: 'Missing information.' });
        }

        const plant = new Plant({ _id: uuid(), name, price, image });
        try {
            await plant.save();
            return res.status(200).json({ message: 'Plant added successfully' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async updatePlant(req, res) {
        const { _id, name, price, image } = req.body

        if(!_id || !name || !price || !image) {
            return res.status(400).json({ error: 'Invalid Item.' });
        }

        await Plant.findByIdAndUpdate(_id, { name, price, image });
        try {       
            return res.status(200).json({ message: 'Plant updated successfully' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async deletePlant(req, res) {
        const _id = req.params

        if(!_id) {
            return res.status(400).json({ error: 'Plant invalid' });
        }

        await Plant.findByIdAndDelete( _id);
        try {
            return res.status(200).json({ message: 'Plant deleted successfully' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}