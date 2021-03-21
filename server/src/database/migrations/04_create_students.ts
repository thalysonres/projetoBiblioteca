import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('students', table => {
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
        table.date('regDate').notNullable().defaultTo('now()');

        table.integer('employees_id')
            .notNullable()
            .references('id')
            .inTable('employees')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('students');
}