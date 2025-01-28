
const connectDB = require('../config/dbClient')

class petsModel{
    async create(pets) {
        const colPets = connectDB.collection('pets')
        return await colPets.insertOne(pets)
    }
}

module.exports = petsModel;