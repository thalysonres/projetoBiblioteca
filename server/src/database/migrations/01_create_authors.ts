import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('authors', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('countryOrigin').notNullable();
        table.string('authorsNotation').notNullable();
        table.integer('genre').notNullable();
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('authors');
}