const fs = require('node:fs');
const readline = require('node:readline');
const Producto = require('../models/producto');

const findAllProductos = async () => {
    const productos = [];
    const fileStream = fs.createReadStream('./data/productos.csv'); //genera el flujo para capturar y leer un archivo y liberar espacio

    const rl = readline.createInterface({  //fs iniciar el flujo y readline para leerlo
    input: fileStream,
    crlfDelay: Infinity,
    });

    for await (const line of rl) {                 //for promesa - of iterar 
        const arregloLinea = line.split(',');
        const producto = new Producto(arregloLinea[0], arregloLinea[1], arregloLinea[2]);
        productos.push(producto);
        
    }
    
    return productos;
    
}

module.exports = findAllProductos; //para que la consola lea el csv clientes