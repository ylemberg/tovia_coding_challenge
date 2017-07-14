const { addMessageToDb } = require('../utils')

const decrypt = {
  get: (req, res) => {
    res.send('hai get decrypt')
  }
}

const encrypt = {
  post: (req, res) => {
    res.send(addMessageToDb(req.body))
  }
}

module.exports = {
  decrypt,
  encrypt
}