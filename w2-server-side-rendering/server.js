let express = require('express')
let hbs = require('express-handlebars')
let server = express()

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))

server.get('/', function(req,res){
  let name = req.query.name || 'Someone'
  let fruit = Math.random() > 0.5 ? ["Bananas","Oranges","Apples","Peaches"] : null
  res.render('home', { name: name, fruit: fruit, fruitListLengthIsGreaterThan5: fruit.length > 5 })
})

module.exports = server
