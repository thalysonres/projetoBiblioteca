import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('librarians', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('address').notNullable();
        table.integer('cpf').notNullable();
        table.string('pass').notNullable();
        table.string('email').notNullable();
        table.date('birthDate').notNullable();
        table.date('regDate').notNullable();
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('librarians');
}