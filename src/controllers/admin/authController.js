const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user')
require('dotenv').config();

function generateToken(user) {
  const tokenData = {
    id: user.id,
    email: user.email
  };
  return jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '10h' });
}


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.query()
        .findOne({username})
    if (!user) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }
    const currentdate = new Date();
    const token = generateToken(user);
    const refeshToken = generateToken(user+currentdate);
    
    res.json({
      success: true,
      message: 'successfully',
      access_token:token,
      refesh_token:refeshToken,
      user: user
    });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// async function register(req, res) {
//     try {
//       const {name, email, password } = req.body;
//       const saltRounds = 10;
//       const salt = bcrypt.genSaltSync(saltRounds);
//       const hashPassword = bcrypt.hashSync(password, salt);
  
//       const user = await User.create({ name, email, password: hashPassword });
      
//       const token = generateToken(user);
//       const refesh_token = generateToken(user);
//       res.json({
//         success: true,
//         message: 'successfully',
//         data: {
//           access_token:token,
//           token_expired:60,
//           refesh_token:refesh_token,
//           user:user
//         }
//       });
//     } catch (err) {
//       console.error('Error registering user:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
