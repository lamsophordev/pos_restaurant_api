const { Model } = require('objection');

class TableType extends Model {
  static get tableName() {
    return 'table_types';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
    };
  }

}

module.exports = TableType;