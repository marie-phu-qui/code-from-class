
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'code something', priority: 1, is_done: false},
        {id: 2, task: 'eat something', priority: 2, is_done: false},
        {id: 3, task: 'sleep a bit', priority: 3, is_done: false}
      ]);
    });
};
