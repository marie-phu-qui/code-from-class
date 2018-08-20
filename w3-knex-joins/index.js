let knex = require('knex')
let config = require('./knexfile').development
let db = knex(config)
let id = null

db('customers').select().then(data => {
  console.log(data)
}).then(() => {
  console.log('')
  console.log('------')
  console.log('')
})


//  Naive Join
id = 3
db('vehicles')
  .select()
  .where('customer_id', '=', id)
  .then(data => {
  let vehicle = data[0]
  console.log('Customer ' + id + ' has a ' + vehicle.colour + ' ' + vehicle.model)
}).then(() => {
  console.log('')
  console.log('------')
  console.log('')
})


//  Knex Join
id = 3
db('customers')
.join('vehicles', 'customers.id', '=', 'vehicles.customer_id')
.where('customer_id', '=', id)
.select("*", "customers.id AS cid", "vehicles.id AS vid")
.first()
.then(record => {
  console.log(record)
  console.log('Customer ' + record.name + ' has a ' + record.colour + ' ' + record.model)
}).then(() => {
  console.log('')
  console.log('------')
  console.log('')
})
