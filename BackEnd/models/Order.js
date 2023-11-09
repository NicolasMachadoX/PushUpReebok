const {Schema,model} = require('mongoose');

const orderSchema = Schema({
    IdProductFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    IdClientFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    IdSalesmanFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    registration_date:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    order_state:{
        type: String,
        require: [true,"The data it's obligatory"]

    } 
});

module.exports = model('order',orderSchema);