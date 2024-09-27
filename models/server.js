const express = require('express');
const findAllClientes = require('../service/clienteService');
const findAllProductos = require('../service/productoService');

class Server{
    constructor(){
        this._app = express();
        this.routes();

    }
        //definir las rutas
    routes(){
        this._app.get('/clientes', async (req, res) => {
            const arregloClientes = await findAllClientes();
            res.json(arregloClientes);
        });

        this._app.get('/productos', async (req, res) => {
            const arregloProductos = await findAllProductos();
            res.json(arregloProductos);
        })

        this._app.get('/probando', (req, res) => {
            res.send('funcionando');
        });

    }

    listen(){
        this._app.listen(3000, () => {
            console.log('Escuchando en el 3000');
            
        });
    }
}

module.exports = Server;