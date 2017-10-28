
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runner_event', (table) => {
    table.increments();
    table.integer('runner_id').references('runner.id').notNullable;
    table.integer('event_id').references('event.id').notNullable;
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runner_event')
};
