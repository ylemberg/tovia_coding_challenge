const router = require('express').Router()
const ctrl = require('../controllers')

router.post('/encrypt', ctrl.encrypt.post)

router.get('/decrypt', ctrl.decrypt.get)

router.get('*', (req, res) => {
  if (req.url[0] === '#') {
    res.render(`${__dirname}/../../../public/build/index.html`)
  } else {
    res.status(404).send('Incorrect route')
  }
})

module.exports = router
