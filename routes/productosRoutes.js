const { Router } = require('express');
const { findAllProductosController, FindByIdController, insertController, updateController, deleteByIdController } = require('../controllers/productoController');

const router = Router();


router.get('/', findAllProductosController) //llamarlo en la ruta correcta en este caso en controller 

router.get("/", FindByIdController );

router.put("/", insertController );

router.post("/", updateController )

router.delete("/", deleteByIdController)

module.exports = router;
