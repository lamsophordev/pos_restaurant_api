const { Model } = require('objection');
const User = require('./user');

class Position extends Model {
  static get tableName() {
    return 'positions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
    };
  }

}

module.exports = Position;