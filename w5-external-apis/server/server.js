const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const apiEndpointBase = 'https://api.chucknorris.io/'


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/jokes/random', (req, res) => {
  request.get(apiEndpointBase + 'jokes/random')
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/jokes/search?query={query}', (req,res) => {
  // https://api.chucknorris.io/jokes/search?query={query}
  let specialSearch = req.query.query

  request.get(apiEndpointBase + 'jokes/search?query=' + specialSearch)
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})

server.get('/jokes/search?query={query}', (req,res) => {
  // https://api.chucknorris.io/jokes/search?query={query}
  let specialSearch = req.query.query

  request.get(apiEndpointBase + 'jokes/search?query=' + specialSearch)
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})


module.exports = server
