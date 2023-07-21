const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.checkMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      "success": false,
      "message": "Unauthorized request",
      "code": 100
    });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Error verifying token:', err);
    res.status(401).json({
      "success": false,
      "message": "Unauthorized request",
      "code": 101
    });
  }
}
