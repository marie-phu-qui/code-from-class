
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, name: 'Customer Mike', address: '123 Customer St', phone_number: '555-1234'},
        {id: 2, name: 'Customer Sally', address: '456 Customer St', phone_number: '555-2234'},
        {id: 3, name: 'Customer Ross', address: '789 Customer St', phone_number: '555-3234'}
      ]);
    });
};
