const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/admin/userController');
const MiddleWare = require('../../middleware/middleware');
router.get('/api/user',MiddleWare.checkMiddleWare, UserController.getUsers);
router.get('/api/user/:id',MiddleWare.checkMiddleWare, UserController.getUser);
router.post('/api/user',MiddleWare.checkMiddleWare, UserController.createUser);
router.put('/api/user/:id',MiddleWare.checkMiddleWare, UserController.updateUser);
router.delete('/api/user/:id',MiddleWare.checkMiddleWare, UserController.deleteUser);

module.exports = router;