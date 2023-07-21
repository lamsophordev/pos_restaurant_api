const express = require('express');
const router = express.Router();
const TableTypeController = require('../../controllers/admin/tableTypeController');
const MiddleWare = require('../../middleware/middleware');

router.get('/api/table-type', MiddleWare.checkMiddleWare, TableTypeController.getTableTypes);
router.get('/api/table-type/:id', MiddleWare.checkMiddleWare, TableTypeController.showTableType);
router.post('/api/table-type', MiddleWare.checkMiddleWare, TableTypeController.createTableType);
router.put('/api/table-type/:id', MiddleWare.checkMiddleWare, TableTypeController.updateTableType);
router.delete('/api/table-type/:id', MiddleWare.checkMiddleWare, TableTypeController.deleteTableType);

module.exports = router;