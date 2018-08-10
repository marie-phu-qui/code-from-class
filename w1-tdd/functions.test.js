let functions = require('./functions')

test('is my test suite working?', function(){
  expect(2).toEqual(2)
})

test('filterOdds should filter the odd numbers', function(){
  // Arrange
  let arr = [1,2,3,4,5,6]
  let expected = [1,3,5]

  // Act
  let actual = functions.filterOdds(arr)

  // Assert
  expect(actual).toEqual(expected)
})

test('filterOdds should filter the odd numbers', function(){
  // Arrange
  let arr = [1,2,3,4]
  let expected = [1,3]

  // Act
  let actual = functions.filterOdds(arr)

  // Assert
  expect(actual).toEqual(expected)
})

test('filterOdds should filter the odd numbers', function(){
  // Arrange
  let arr = [4,3,2,1]
  let expected = [3,1]

  // Act
  let actual = functions.filterOdds(arr)

  // Assert
  expect(actual).toEqual(expected)
})

test('filterEvens should filter the even numbers', function(){
  // Arrange
  let arr = [1,2,3,4,5,6]
  let expected = [2,4,6]

  // Act
  let actual = functions.filterEvens(arr)

  // Assert
  expect(actual).toEqual(expected)
})
