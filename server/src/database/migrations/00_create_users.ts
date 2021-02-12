import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable();
        table.string('cpf').notNullable();
        table.string('senha').notNullable();
        table.string('email').notNullable();
        table.string('datanasc').notNullable();
        table.string('datacad').notNullable();
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}