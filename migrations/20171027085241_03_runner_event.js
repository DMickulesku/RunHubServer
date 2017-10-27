
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runner_event', (table) => {
    table.increments();
    table.integer('runner_id').references('runners.id').onDelete('cascade');
    table.integer('event_id').references('events.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runner_event')
};
