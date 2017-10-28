
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runner', (table) => {
    table.increments();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runner')
};
