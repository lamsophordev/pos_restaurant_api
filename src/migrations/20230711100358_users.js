/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('image').nullable;
        table.bigInteger('position_id').nullable(),
        table.string('name').notNullable();
        table.string('id_card').nullable();
        table.string('phone').nullable().unique();
        table.string('gender').nullable();
        table.string('email').nullable().unique();
        table.integer('user_type').notNullable();
        table.string('username').nullable();
        table.string('password').nullable();
        table.boolean('is_enable').defaultTo(true)
        table.timestamps(true, true);
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
