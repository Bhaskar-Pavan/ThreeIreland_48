const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const simOrderController = require('../controllers/sim-order.controller');

router.post('/', authMiddleware, simOrderController.orderSim);

module.exports = router;