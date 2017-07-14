const router = require('express').Router()
const { encrypt, decrypt } = require('../controllers')

router.post('/encrypt', encrypt.post)

router.get('/decrypt', decrypt.get)

router.get('*', (req, res) => {
  if (req.url[0] === '#') {
    res.render(`${__dirname}/../../../public/build/index.html`)
  } else {
    res.status(404).send('Incorrect route')
  }
})

module.exports = router
