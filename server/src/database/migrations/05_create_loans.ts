import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('loans', table => {
        table.increments('id').primary();
        table.date('loanDate').notNullable();
        table.date('returnDate').notNullable();

        table.integer('student_id')
            .notNullable()
            .references('id')
            .inTable('students');
        table.integer('employees_id')
            .notNullable()
            .references('id')
            .inTable('employees');
        table.integer('literaryWorks_id')
            .notNullable()
            .references('id')
            .inTable('literaryWorks');
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('loans');
}