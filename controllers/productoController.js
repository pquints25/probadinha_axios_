const findAllProductos = require('../service/productoService');

const findAllProductosController = async (req, res) => {
    const arregloProductos = await findAllProductos();
    res.json(arregloProductos);
}

const FindByIdController = (req, res) => {
    res.json('FindById Productos');
}

const insertController = (req, res) => {
    res.json('Insertar Productos');
}

const updateController = (req, res) => {
    res.json('Update Productos');
}

const deleteByIdController = (req, res) => {
    res.json('Borrar Productos');
}

module.exports = {
    findAllProductosController,
    FindByIdController,
    insertController,
    updateController,
    deleteByIdController
};