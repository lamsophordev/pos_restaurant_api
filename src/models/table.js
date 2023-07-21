const { Model } = require('objection');
const TableType = require('./tableType');

class Table extends Model {
  static get tableName() {
    return 'tables';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['code'],
    };
  }

  static get relationMappings() {
    return {
      tableType: {
        relation: Model.BelongsToOneRelation,
        modelClass: TableType,
        join: {
          from: 'tables.table_type_id',
          to: 'table_types.id'
        }
      }
    }
  }
}

module.exports = Customer;