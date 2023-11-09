const {Schema,model} = require('mongoose');

const inventarySchema = Schema({

    idProductFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    stock:{
        type: Number,
        require: [true,"The data it's obligatory"]
    }
    
      
});

module.exports = model('inventary',inventarySchema);