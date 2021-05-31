
exports.up = function(knex) {
    return knex.schema.createTable('literaryWorks', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('edition').notNullable();
        table.integer('editionYear').notNullable();
        table.integer('numberPage').notNullable();
        table.string('publishingComp').notNullable();
        table.string('publication').notNullable();
        table.string('ISBN').notNullable();
        table.string('CDD').notNullable();
        table.string('CDU').notNullable();
        table.string('translator');
        table.boolean('borrowed');
        table.string('file')

        table.integer('author_id')
            .notNullable()
            .references('id')
            .inTable('authors');
        table.integer('locality_id')
            .notNullable()
            .references('id')
            .inTable('localities');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('literaryWorks');  
};
