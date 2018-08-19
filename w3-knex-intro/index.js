// TODO list:
// table: todos
// task (string), priority (integer), is_done (boolean)
// others: date_created, due_date, category

let knex = require('knex')
let config = require('./knexfile').development
let db = knex(config)

function getTodos() {
  return db('todos1').select()
  .then(data => {
    console.log('then1')
    return data
  })
  .catch(err => {
    console.log('oh dear, ' + err)
  })
}

getTodos().then(data => {
  console.log(data)
})
