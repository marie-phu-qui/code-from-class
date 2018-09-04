const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const apiEndpointBase = 'https://api.wheretheiss.at/v1/'


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/v1/satellites', (req,res) => {
  request.get(apiEndpointBase + 'satellites')
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})

server.get('/v1/satellites/:satId', (req,res) => {
  request.get(apiEndpointBase + 'satellites/' + req.params.satId)
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})

module.exports = server
