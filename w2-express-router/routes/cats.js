let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
  res.send('Cats')
})

router.get('/:id', (req,res) => {
  res.send('Cat with an id of ' + req.params.id)
})

module.exports = router
