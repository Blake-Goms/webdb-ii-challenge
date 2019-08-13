const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development)

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dealer = await db('dealer');
        res.json(dealer); 
    } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve dealers list of cars' });
    }
});

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params; //destructing the params object
        const dealer = await db('dealer').where({id});
        res.status(200).json(dealer);
    }
    catch (err) {
        res.status(500).json({message: 'Failed to retrieve the car from dealer'})
    }
})

router.post('/', async (req,res) => {
    try {
        const dealerData = req.body;
        const [ id ] = await db('dealer').insert(dealerData); //destructing as an array since insert returns an array
        const newDealerData = await db('dealer').where({ id })
        res.status(201).json(newDealerData)
    }
    catch (err) {
        console.log('POST Error: ', err);
        res.status(500).json({ message: 'Failed to create new car'})
    }
})

router.put('/:id', async (req,res) => {
    try {
        const changes = req.body;
        if(changes.make && changes.model && changes.miles){
            const updatedData = await db('dealer').where('id', '=', req.params.id).update(changes)
            res.status(204).json(updatedData)
        } 
        else {
            res.status(400).json({message: 'Data is not valid'})
        }
        }
    catch (err) {
        res.status(500).json({message: 'Error updating the car'})
    }
    
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if(id){
            const deletedData = await db('dealer').where({ id }).del();
            res.status(204).json(deletedData);
        }
        else {
            res.status(400).json({message: 'id is not valid'})
        }
    }
    catch (err) {
        res.status(500).json({message: 'Server Error deleting data'})
    }
})

module.exports = router;