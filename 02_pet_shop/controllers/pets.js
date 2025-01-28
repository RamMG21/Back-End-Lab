//majenar los controladores como clases
//de manera que se conporte como un objeto
const petsModel = require('../models/pets');

const getAllPets = async (req,res) => {
    try {
        res.status(201).json({ ststus: 'ok get'});
    } catch (error) {
        res.status(500).json({ msg:error})
    }
}

const createPets = async (req,res) => {
    try {
        const data = petsModel.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ msg:error})
    }
}



module.exports = {
    getAllPets,
    createPets
    };