
const Customer = require('../../models/customer')

exports.getCustomers = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const currentPage = req.query.page || 1;
    const customers = await Customer.query().page(currentPage - 1, PAGE_SIZE).withGraphFetched('customerType');
    res.json({
      success: true,
      message: '',
      data: customers
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.showCustomer= async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.query().withGraphFetched('customerType').findById(id);
    if (customer) {
      res.json({
        success: true,
        message: '',
        data: customer
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

exports.createCustomer = async (req, res) => {
  const { name,customer_type_id,contact,sequence_order,is_enable,} = req.body;
  try {
    const customer = await Customer.query().insert({name,customer_type_id,contact,sequence_order,is_enable,});
    res.json({
      success: true,
      message: 'Create customer successfully',
      data: customer
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name,customer_type_id,contact,sequence_order,is_enable } = req.body;
  try {
    const customer = await Customer.query().findById(id);
    if (customer) {
      await customer.$query().update({name,customer_type_id,contact,sequence_order,is_enable});
      res.json({
        success: true,
        message: 'Update customer successfully',
        data: customer
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.query().findById(id);
    if (customer) {
      await customer.$query().delete();
      res.json({ message: 'The record deleted successfully' });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err});
  }
};