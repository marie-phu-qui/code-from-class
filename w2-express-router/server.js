let express = require('express')
let server = express()
let hbs = require('express-handlebars')

server.use(express.urlencoded({extended:false}))

let catRoutes = require('./routes/cats')
let dogRoutes = require('./routes/dogs')
let ratRoutes = require('./routes/rats')
let puppyRoutes = require('./routes/puppies')

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.get('/', (req,res) => {
  res.send('OK')
})

server.use('/cats', catRoutes)
server.use('/dogs', dogRoutes)
server.use('/rats', ratRoutes)
server.use('/puppies', puppyRoutes)

module.exports = server
