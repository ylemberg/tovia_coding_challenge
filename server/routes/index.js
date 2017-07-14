const router = require('express').Router()
const ctrl = require('../controllers')

router.post('/encrypt', ctrl.encrypt.post)

router.get('/decrypt', ctrl.decrypt.get)

module.exports = router
