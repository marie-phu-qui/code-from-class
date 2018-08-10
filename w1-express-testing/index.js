let server = require('./server')

let port = 3000

server.listen(port, () => {
  console.log('Server is up on port ' + port)
})
