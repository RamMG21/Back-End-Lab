const mongoose = require('mongoose')



const connectDB = async (url) =>{
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, // Opcional, pero recomendado
            useUnifiedTopology: true, // Opcional, pero recomendadouseNewUrlParser: true, // Opcional, pero recomendado
           
        })
        console.log('🟢 Conexión exitosa a la base de datos')
    } catch (error) {
        console.error('🔴 Error al conectar a la base de datos:', error.message);
        process.exit(1); // Detiene la aplicación en caso de error
    }
   
}



module.exports = connectDB;

