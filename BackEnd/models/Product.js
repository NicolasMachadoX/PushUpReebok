const {Schema,model} = require('mongoose');

const clientSchema = Schema({
    model:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    description:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    price:{
        type: Number,
        require: [true,"The data it's obligatory"]

    },
    available:{
        type: Boolean,
        require: [true,"The data it's obligatory"]

    },
    IdInventaryFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    }
    
      
});

module.exports = model('product',clientSchema);