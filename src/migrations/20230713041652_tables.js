/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tables', (table) => {
        table.increments('id').primary();
        table.string('code').notNullable();
        table.string('table_type_id').notNullable();
        table.string('status').notNullable().defaultTo('available'),
        table.bigInteger('sequence_order ').nullable().defaultTo(1)
        table.boolean('is_enable').defaultTo(true)
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
     return knex.schema.dropTableIfExists('tables');
};
