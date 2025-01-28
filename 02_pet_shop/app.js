const express = require('express');
require('dotenv').config()
const petsRouter = require('./routes/pets')
const app = express();

//Middleware
app.use(express.json())

app.use('/pets', petsRouter)


try {
    const PORT =process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Active server in the port ' + PORT))
} catch (error) {
    console.log(error);
}