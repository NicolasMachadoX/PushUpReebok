const {Schema,model} = require('mongoose');

const clientSchema = Schema({
    name:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    lastname:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    email:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    adress:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    country:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    city:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    cellphone:{
        type: Number,
        require: [true,"The data it's obligatory"]

    }  
});

module.exports = model('client',clientSchema);