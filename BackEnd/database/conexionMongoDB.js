const mongoose = require('mongoose');

const Conexion =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB CONNECTED SUCCESFULLY');
    } catch (error) {
        throw new Error('DB CANT INICIALIZATED')   
    }
} ;

module.exports = Conexion;