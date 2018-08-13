let index = require('../index')


test('is this working?', function(){
  expect(1).toBeLessThan(2)
})

test('getSomeJson can load a JSON file', function(done){
  // Arrange
  let expected = ["this", "some"]

  // Act
  index.getSomeJson('./tests/files/validJsonFile.json', function(err, jsonData){
    let actual = Object.keys(jsonData)

    // Assert
    expect(actual).toEqual(expected)

    done()
  })
})

test('getSomeJson can handle an incorrect path', function(done){
  // Arrange
  let expected = ["this", "some"]

  // Act
  index.getSomeJson('./tests/files/notTheNameOfARealFile.json', function(err, jsonData){
    // Assert
    expect(err).toBeTruthy()
    expect(jsonData).toBeFalsy()

    done()
  })
})

test('can handle an invalid JSON file', function(done){
  // Act
  index.getSomeJson('./tests/files/invalidJsonFile.json', function(err, jsonData){
    // Assert
    expect(err).toBeTruthy()
    expect(jsonData).toBeFalsy()

    done()
  })
})
