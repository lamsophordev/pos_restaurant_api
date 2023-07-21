const { Model } = require('objection');
const Position = require('./position');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      // properties: {
      //   id: { type: 'integer' },
      //   image: { type: 'string' },
      //   positionId: { type: 'integer' },
      //   idCard: { type: 'string' },
      //   name: { type: 'string' },
      //   phone: { type: 'string' },
      //   gender: { type: 'string' },
      //   email: { type: 'string' },
      //   userType: { type: 'integer' },
      //   username: { type: 'string' },
      //   password: { type: 'string' },
      //   isEnable: { type: 'boolean'}
      // },
    };
  }

  static get relationMappings() {
    return {
      position: {
        relation: Model.BelongsToOneRelation,
        modelClass: Position,
        join: {
          from: 'users.position_id',
          to: 'positions.id'
        }
      }
    }
  }
}

module.exports = User;