const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/admin/customerController');
const MiddleWare = require('../../middleware/middleware');

router.get('/api/customer', MiddleWare.checkMiddleWare, CustomerController.getCustomers);
router.get('/api/customer/:id', MiddleWare.checkMiddleWare, CustomerController.showCustomer);
router.post('/api/customer', MiddleWare.checkMiddleWare, CustomerController.createCustomer);
router.put('/api/customer/:id', MiddleWare.checkMiddleWare, CustomerController.updateCustomer);
router.delete('/api/customer/:id', MiddleWare.checkMiddleWare, CustomerController.deleteCustomer);

module.exports = router;