let functions = require('./index')

test('getInvoiceLines gets the right number of invoice lines', function(){
  // Arrange
  let expected = 2

  // Act
  let actual = functions.getInvoiceLines().length

  // Assert
  expect(expected).toBe(actual)
})
