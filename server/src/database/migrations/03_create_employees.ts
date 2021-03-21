import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('employees', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('street').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.integer('cpf').notNullable().unique();
        table.string('pass').notNullable();
        table.date('birthDate').notNullable();
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('employees');
}