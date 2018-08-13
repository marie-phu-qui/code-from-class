let fs = require('fs')

function getSomeJson(path, callback) {
  fs.readFile(path, 'utf8', function(err, data){
    if (err) {
      callback(err)
    } else {
      try {
        let jsonData = JSON.parse(data)
        callback(null, jsonData)
      } catch(error) {
        callback(error)
      }
    }
  })
}

module.exports = {
  getSomeJson
}
