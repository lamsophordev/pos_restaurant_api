const { Model } = require('objection');
const CustomerType = require('./customerType');

class Customer extends Model {
  static get tableName() {
    return 'customers';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
    };
  }

  static get relationMappings() {
    return {
      customerType: {
        relation: Model.BelongsToOneRelation,
        modelClass: CustomerType,
        join: {
          from: 'customers.customer_type_id',
          to: 'customer_types.id'
        }
      }
    }
  }
}

module.exports = Customer;