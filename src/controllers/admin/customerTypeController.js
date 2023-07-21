
const CustomerType = require('../../models/customerType')

exports.getCustomerTypes = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const currentPage = req.query.page || 1;
    const customerTypes = await CustomerType.query().page(currentPage - 1, PAGE_SIZE);
    res.json({
      success: true,
      message: '',
      data: customerTypes
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.showCustomerType = async (req, res) => {
  const { id } = req.params;
  try {
    const customerType = await CustomerType.query().findById(id);
    if (customerType) {
      res.json({
        success: true,
        message: '',
        data: customerType
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

exports.createCustomerType = async (req, res) => {
  const { name } = req.body;
  try {
    const customerType = await CustomerType.query().insert({ name });
    res.json({
      success: true,
      message: 'Create customerType successfully',
      data: customerType
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updateCustomerType = async (req, res) => {
  const { id } = req.params;
  const { name  } = req.body;
  try {
    const customerType = await CustomerType.query().findById(id);
    if (customerType) {
      await customerType.$query().update({name});
      res.json({
        success: true,
        message: 'Update customerType successfully',
        data: customerType
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err });
  }
};

exports.deleteCustomerType = async (req, res) => {
  const { id } = req.params;
  try {
    const customerType = await CustomerType.query().findById(id);
    if (customerType) {
      await customerType.$query().delete();
      res.json({ message: 'The record deleted successfully' });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err});
  }
};