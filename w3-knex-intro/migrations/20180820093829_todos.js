
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id').primary()
    table.string('task')
    table.integer('priority')
    table.boolean('is_done')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
