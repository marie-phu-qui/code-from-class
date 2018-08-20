function doWork() {
  console.log('about to work')
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('Working')

      let success = Math.random() > 0.5
      let message = success ? 'yay' : 'not yay'
      success > 0.5 ? resolve(message) : reject(message)
    }, 3000)
  })
}

function myWork(msg) {
  console.log('this is my work - ' + msg)
  return 'here is the output of the original work'
}

function doSomethingElse(output) {
  console.log('more work!!!')
  console.log(output)
}

function myError(msg){
  console.log('ERRROROOORRRROROR! ' + msg)
}

doWork()
  .then(myWork)
  .then(doSomethingElse)
  .catch(myError)
