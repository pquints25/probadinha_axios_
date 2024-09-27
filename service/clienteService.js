const fs = require('node:fs');
const readline = require('node:readline');
const Cliente = require('../models/cliente');

const findAllClientes = async () => {
    const clientes = [];
    const fileStream = fs.createReadStream('./data/clientes.csv'); //genera el flujo para capturar y leer un archivo y liberar espacio

    const rl = readline.createInterface({  //fs iniciar el flujo y readline para leerlo
    input: fileStream,
    crlfDelay: Infinity,
    });

    for await (const line of rl) {                 //for promesa - of iterar 
        const arregloLinea = line.split(',');
        const cliente = new Cliente(arregloLinea[0], arregloLinea[1], arregloLinea[2]);
        clientes.push(cliente);
        
    }
    
    return clientes;
    
}

module.exports = findAllClientes //para que la consola lea el csv clientes