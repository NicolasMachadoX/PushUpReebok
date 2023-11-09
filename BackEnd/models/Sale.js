const {Schema,model} = require('mongoose');

const saleSchema = Schema({
    IdSalesmanFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    IdOrderFK:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
      
});

module.exports = model('sale',saleSchema);