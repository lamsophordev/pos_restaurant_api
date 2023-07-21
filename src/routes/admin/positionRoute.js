const express = require('express');
const router = express.Router();
const PositionController = require('../../controllers/admin/positionController');
const MiddleWare = require('../../middleware/middleware');

router.get('/api/position', MiddleWare.checkMiddleWare, PositionController.getPositions);
router.get('/api/position/:id', MiddleWare.checkMiddleWare, PositionController.getPosition);
router.post('/api/position', MiddleWare.checkMiddleWare, PositionController.createPosition);
router.put('/api/position/:id', MiddleWare.checkMiddleWare, PositionController.updatePosition);
router.delete('/api/position/:id', MiddleWare.checkMiddleWare, PositionController.deletePosition);

module.exports = router;