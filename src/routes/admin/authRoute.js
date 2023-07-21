const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/admin/authController');

router.post('/api/login', AuthController.login);

module.exports = router;