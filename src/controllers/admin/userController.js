
const User = require('../../models/user')
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const currentPage = req.query.page || 1;
    const users = await User.query().page(currentPage - 1, PAGE_SIZE).withGraphFetched('position');
    console.log(users);
    res.json({
      success: true,
      message: '',
      data: users
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.query().withGraphFetched('position').findById(id);
    if (user) {
      res.json({
        success: true,
        message: '',
        data: user
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.createUser = async (req, res) => {
  const { image, position_id, id_card, name, phone, gender, email, user_type, username, password } = req.body;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);

  try {
    const user = await User.query().insert({ image, position_id, id_card, name, phone, gender, email, user_type, username, password: hashPassword });
    res.json({
      success: true,
      message: 'Create user successfully',
      data: user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { image, position_id, id_card, name, phone, gender, email, user_type, username, password } = req.body;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const user = await User.query().findById(id);
    if (user) {
      await user.$query().update({ image, position_id, id_card, name, phone, gender, email, user_type, username, password: hashPassword });
      res.json({
        success: true,
        message: 'Update user successfully',
        data:  user 
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.query().findById(id);
    if (user) {
      await user.$query().delete();
      res.json({ message: 'The record deleted successfully' });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};