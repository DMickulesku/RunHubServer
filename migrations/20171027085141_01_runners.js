
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runners', (table) => {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runners')
};
