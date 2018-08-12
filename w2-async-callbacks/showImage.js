let fs = require('fs')

let path = './image.txt'

fs.readFile(path, 'utf8', function(err, data){
  if (err) {
    console.log("Can't read file at " + path)
  } else {
    console.log(data)
  }
})
