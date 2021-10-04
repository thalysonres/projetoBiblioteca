
exports.up = function(knex) {
    return knex.schema.createTable('loans', table => {
        table.increments('id').primary();
        table.date('loanDate').notNullable();
        table.date('returnDate').notNullable();
        table.integer('renovations')

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
};

exports.down = function(knex) {
    return knex.schema.dropTable('loans');
};
