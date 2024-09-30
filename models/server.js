const express = require('express');

class Server{
    constructor(){
        this._app = express();
        this.middlewares();
        this.routes();
        
    } //contructor llamara a rutas

    middlewares(){
        this._app.use(express.json());
    }
        //llamar

        //definir las rutas
    routes(){
        this._app.use('/productos', require('../routes/productosRoutes'));
        this._app.use('/clientes', require('../routes/clientesRoutes'));
    }

    listen(){
        this._app.listen(3000, () => {
            console.log('Escuchando en el 3000');
            
        });
    }
}
module.exports = Server;