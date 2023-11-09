const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const conexion = require('../database/conexionMongoDB.js');

class Server{

constructor(){

    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.paths = {
        client: '/api/client',
        inventary: '/api/inventary',
        order: '/api/order',
        product: '/api/product',
        sale: '/api/sale',
        salesman: '/api/salesman',
        user: '/api/user'
    };

   

    this.routes();

    this.dbConnexion();

}

async dbConnexion(){
    await conexion();
}

routes(){
    this.app.use(this.paths.client ,require('../routes/client.routes.js'));
    this.app.use(this.paths.inventary ,require('../routes/inventary.routes.js'));
    this.app.use(this.paths.order ,require('../routes/order.routes.js'));
    this.app.use(this.paths.product ,require('../routes/product.routes.js'));
    this.app.use(this.paths.sale ,require('../routes/sale.routes.js'));
    this.app.use(this.paths.salesman,require('../routes/salesman.routes.js'));
    this.app.use(this.paths.user ,require('../routes/user.routes.js'));
}

middlewares(){
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({extended:false}));
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`Server running on port ${this.port}`);
    })

}

};

module.exports = Server;