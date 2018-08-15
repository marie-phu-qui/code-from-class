let express = require('express')
let router = express.Router()
let data = require('../data.json')
let fs = require('fs')

router.get('/', (req,res) => {
  // console.log(data)
  res.render('puppies')
})

router.get('/:id/edit', (req,res) => {
  let puppy = data.puppies.find(puppy => puppy.id == req.params.id)
  res.render('puppies-edit', puppy)
})

router.post('/:id', (req,res) => {
  let newPuppyData = req.body
  let existingPuppy = data.puppies.find(puppy => puppy.id == req.params.id)

  existingPuppy.name = newPuppyData.name
  existingPuppy.owner = newPuppyData.owner
  existingPuppy.image = newPuppyData.image
  existingPuppy.breed = newPuppyData.breed

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    console.log('err', err)
    if (err) res.send('Not OK')
    if (!err) res.send('OK')
  })

  res.send('OK')
})


router.post('/', (req,res) => {
  let puppy = req.body

  let nextId = data.puppies.length + 1
  puppy.id = nextId
  data.puppies.push(puppy)

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    console.log('err', err)
    if (err) res.send('Not OK')
    if (!err) res.send('OK')
  })
})




module.exports = router
