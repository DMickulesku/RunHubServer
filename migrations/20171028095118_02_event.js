
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', (table) => {
    table.increments();
    table.date('date').notNullable();
    table.text('type').notNullable();
    table.text('title').notNullable();
    table.text('location').notNullable();
    table.text('route');
    table.integer('hostId').references('runner.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event')
};
