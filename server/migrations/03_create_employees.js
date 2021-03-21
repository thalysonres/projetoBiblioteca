
exports.up = function(knex) {
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
};

exports.down = function(knex) {
    return knex.schema.dropTable('employees');
  
};
