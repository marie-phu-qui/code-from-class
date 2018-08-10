let request = require('supertest')
let server = require('../server')

test('make sure stuff works', () => {
  expect(2).toBeGreaterThan(1)
})

test('test the home route', (done) => {
  // Act
  request(server).get('/')
    .end((err, res) => {

      // Assert
      expect(res.text).toMatch(/Hi there/)

      done()
    })
})
