const {Schema,model} = require('mongoose');

const salesmanSchema = Schema({
    username:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    email:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    password:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    CC:{
        type: Number,
        require: [true,"The data it's obligatory"]

    } 
});

module.exports = model('salesman',salesmanSchema);