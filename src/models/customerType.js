const { Model } = require('objection');

class CustomerType extends Model {
  static get tableName() {
    return 'customer_types';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
    };
  }

}

module.exports = CustomerType;