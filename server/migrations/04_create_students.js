
exports.up = function(knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('street').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('cpf', 11).notNullable().unique(); //integer
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
};

exports.down = function(knex) {
    return knex.schema.dropTable('students');
};
