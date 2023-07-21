/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customers', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('customer_type_id').notNullable();
        table.string('contact').nullable(),
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
    return knex.schema.dropTableIfExists('customers');
};
