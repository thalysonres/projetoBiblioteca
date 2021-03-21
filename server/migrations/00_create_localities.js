
exports.up = function(knex) {
    return knex.schema.createTable('localities', table => {
        table.increments('id').primary();
        table.string('hall').notNullable();
        table.string('bookcase').notNullable();
        table.string('shelf').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('localities');
};
