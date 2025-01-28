const express = require('express');
const router = express.Router();
const {getAllPets, createPets} = require('../controllers/pets')

router.route('/').get(getAllPets).post(createPets);


module.exports = router;