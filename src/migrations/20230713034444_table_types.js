/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('table_types', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
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
    return knex.schema.dropTableIfExists('table_types');
};
