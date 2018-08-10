

let types = {
  s: "this is a string",
  b: false,
  f: 1.5,
  num: 1,
  o: { one: 1 },
  u: undefined,
  fu: function f() { console.log('hi, I am a function') },
  a: ['one', 'two', 'three'],
  n: null
}


// console.log('I am a string?', typeof types.s)
// console.log('I am a boolean?', typeof types.b)
// console.log('I am a float?', typeof types.f)
// console.log('I am a number or integer?', typeof types.num)
// console.log('I am a object', typeof types.o)
// console.log('I am a undefined', typeof types.u)
// console.log('I am a function', typeof types.fu)
// console.log('I am a array?', typeof types.a)
// console.log('I am a null', typeof types.n)

// I am a named function
function greeting() {
  console.log('Hi')
}

// I am a function without a name
// I am an anonymous function
function() {
  console.log('Hi')
}

// I am a first class function
// I am assigned to a variable
let sayHi = function() {
  console.log('Hi')
}

let sayHello = sayHi

sayHi = null

// sayHi()
// sayHello()

// I am a higher order function
function runMe(myFunc) {
  myFunc()
}

runMe(sayHello)
