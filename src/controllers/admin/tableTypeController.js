
const TableType = require('../../models/tableType')

exports.getTableTypes = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const currentPage = req.query.page || 1;
    const tableTypes = await TableType.query().page(currentPage - 1, PAGE_SIZE);
    res.json({
      success: true,
      message: '',
      data: tableTypes
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.showTableType = async (req, res) => {
  const { id } = req.params;
  try {
    const tableType = await TableType.query().findById(id);
    if (tableType) {
      res.json({
        success: true,
        message: '',
        data: tableType
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

exports.createTableType = async (req, res) => {
  const { name,sequence_order,is_enable } = req.body;
  try {
    const tableType = await TableType.query().insert({ name,sequence_order,is_enable});
    res.json({
      success: true,
      message: 'Create table type successfully',
      data: tableType
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updateTableType = async (req, res) => {
  const { id } = req.params;
  const { name,sequence_order,is_enable  } = req.body;
  try {
    const tableType = await TableType.query().findById(id);
    if (tableType) {
      await TableType.$query().update({name,sequence_order,is_enable});
      res.json({
        success: true,
        message: 'Update table type successfully',
        data: tableType
      });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err });
  }
};

exports.deleteTableType = async (req, res) => {
  const { id } = req.params;
  try {
    const tableType = await TableType.query().findById(id);
    if (tableType) {
      await TableType.$query().delete();
      res.json({ message: 'The record deleted successfully' });
    } else {
      res.status(404).json({ message: 'The record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err});
  }
};