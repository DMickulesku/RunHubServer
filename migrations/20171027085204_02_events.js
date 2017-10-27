
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.text('type').notNullable();
    table.text('title').notNullable();
    table.text('location').notNullable();
    table.text('route');
    table.integer('host_runner_id').references('runners.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
