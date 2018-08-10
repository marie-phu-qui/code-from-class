let express = require('express')
let server = express()

server.use(express.urlencoded({extended: false}))

server.get('/', (req,res) => {
  res.send('<h1>Hi there!</h1><form action="/form" method="POST"><input type="text" name="name"/><input type="submit"/></form>')
})

server.post('/form', (req,res) => {
  let name = req.body.name
  res.send('Hi again ' + name + '!')
})

module.exports = server
