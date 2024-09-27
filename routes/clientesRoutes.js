const {Router} = require('express');
const { findAllClientesController, FindByIdClientesController, insertController, updateController, deleteByIdController } = require('../controllers/clienteController');

const router = Router();

router.get('/', findAllClientesController);

router.get("/", FindByIdClientesController);

router.post("/", insertController)

router.put("/", updateController)

router.delete("/", deleteByIdController)

module.exports = router;
