const { hashAndPersistData, retrieveData } = require('../utils')

const decrypt = {
  get: (req, res) => {
    retrieveData(req.query.hash, req.query.passphrase, err => {
      res.send('failed to retrive hash')
    }, formData => {
      res.send(JSON.stringify(formData))
    })
  }
}

const encrypt = {
  post: (req, res) => {
    res.send(hashAndPersistData(req.body))
  }
}

module.exports = {
  decrypt,
  encrypt
}