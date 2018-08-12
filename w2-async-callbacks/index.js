

function doWork(){
  console.log('Working... this is hard.')
}

function doWorkAsync() {
  setTimeout(function(){
    console.log('Working... this is hard. line 14')
  }, 1000)
}

function doWorkAsyncWithCb(callback) {
  console.log('process 2 is just starting')
  setTimeout(function(){
    // Ternary operation
    let result = Math.random() > 0.5 ? 'success' : 'failure'
    console.log('Working... this is hard (' + result + '). (line 26)')
    let err = result == 'success' ? null : 'ERRORRRRRRRRR'
    callback(err)
  }, 1000)
}

// console.log('about to do some work (line 13)')
// doWorkAsync()
// console.log('I have done some work, will rest now. (line 15)')


console.log('about to do some work (line 25)')
doWorkAsyncWithCb(function(err){
  if (err) {
    console.log('something went wrong')
  } else {
    console.log('I have done some work, will rest now.')
  }
})

console.log('process 1 is done')
