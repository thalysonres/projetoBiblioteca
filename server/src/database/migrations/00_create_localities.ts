import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('localities', table => {
        table.increments('id').primary();
        table.string('hall').notNullable();
        table.string('bookcase').notNullable();
        table.string('shelf').notNullable();
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('localities');
}