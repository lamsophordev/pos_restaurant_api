
const Position = require('../../models/position')
exports.getPositions = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const currentPage = req.query.page || 1;
    const positions = await Position.query().page(currentPage - 1, PAGE_SIZE);
    res.json({
      success: true,
      message: '',
      data: positions
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPosition = async (req, res) => {
  const { id } = req.params;
  try {
    const position = await Position.query().findById(id);
    if (position) {
      res.json({
        success: true,
        message: '',
        data: position
      });
    } else {
      res.status(404).json({ 
        success: false,
        message: 'The record not found',
        data:null
       });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.createPosition = async (req, res) => {
  const { name } = req.body;
  try {
    const position = await Position.query().insert({ name });
    res.json({
      success: true,
      message: 'Create position successfully',
      data: position
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updatePosition = async (req, res) => {
  const { id } = req.params;
  const { name  } = req.body;
  try {
    const position = await Position.query().findById(id);
    if (position) {
      await position.$query().update({name});
      res.json({
        success: true,
        message: 'Update position successfully',
        data: position
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err });
  }
};

exports.deletePosition = async (req, res) => {
  const { id } = req.params;
  try {
    const position = await Position.query().findById(id);
    if (position) {
      await position.$query().delete();
      res.json({ message: 'The record deleted successfully' });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err});
  }
};