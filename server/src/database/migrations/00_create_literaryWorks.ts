import Knex from 'knex';

//faz alteração no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('literaryWorks', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('edition').notNullable();
        table.integer('editionYear').notNullable();
        table.string('publishingComp').notNullable();
        table.string('publication').notNullable();
        table.string('ISBN').notNullable();
        table.string('CDD').notNullable();
        table.string('CDU').notNullable();
        table.string('translator');

        table.integer('author_id')
            .notNullable()
            .references('id')
            .inTable('authors');
        table.integer('locality_id')
            .notNullable()
            .references('id')
            .inTable('localities');
    });
}
// desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('literaryWorks');
}