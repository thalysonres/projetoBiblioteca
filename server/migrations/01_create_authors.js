
exports.up = function(knex) {
    return knex.schema.createTable('authors', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('countryOrigin').notNullable();
        table.string('authorsNotation').notNullable();
        table.string('genre').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('authors');
};
