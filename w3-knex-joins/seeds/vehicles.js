
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, colour: 'red', year: '1990', make: 'Toyota', model: 'Corolla', customer_id: 3},
        {id: 2, colour: 'yellow', year: '1991', make: 'Toyota', model: 'Corona', customer_id: 2},
        {id: 3, colour: 'green', year: '2000', make: 'Toyota', model: 'Corolla', customer_id: 1}
      ]);
    });
};
