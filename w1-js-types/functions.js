function sayHello(name) {
  print('Hello ' + name)
}

function sayBye(name) {
  console.log('Bye ' + name)
}

function print(stuff) {
  console.log(stuff)
}

module.exports = {
  sayHello: sayHello,
  sayBye: sayBye
}
