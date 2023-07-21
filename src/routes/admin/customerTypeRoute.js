const express = require('express');
const router = express.Router();
const CustomerTypeController = require('../../controllers/admin/customerTypeController');
const MiddleWare = require('../../middleware/middleware');

router.get('/api/customer-type', MiddleWare.checkMiddleWare, CustomerTypeController.getCustomerTypes);
router.get('/api/customer-type/:id', MiddleWare.checkMiddleWare, CustomerTypeController.showCustomerType);
router.post('/api/customer-type', MiddleWare.checkMiddleWare, CustomerTypeController.createCustomerType);
router.put('/api/customer-type/:id', MiddleWare.checkMiddleWare, CustomerTypeController.updateCustomerType);
router.delete('/api/customer-type/:id', MiddleWare.checkMiddleWare, CustomerTypeController.deleteCustomerType);

module.exports = router;