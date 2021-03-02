import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('address').notNullable();
        table.integer('cpf').notNullable();
        table.string('pass').notNullable();
        table.date('birthDate').notNullable();

        table.integer('librarian_id')
            .notNullable()
            .references('id')
            .inTable('librarians')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('students');
}