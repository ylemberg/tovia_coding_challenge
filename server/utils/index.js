const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Message = mongoose.model('Message')

const hashData = data => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT))
  const hash = bcrypt.hashSync(data, salt)

  return hash
}

const addEncryptionToDb = (hash, formData) => {
  const messageObj = Object.assign({}, formData)
  messageObj.hash = hash

  Message.create(messageObj, (err, createdMsg) => {})
}

const hashAndPersistData = formData => {
  const hash = hashData(formData.message + formData.name + formData.date + formData.passphrase)
  addEncryptionToDb(hash, formData)

  return hash
}

const retrieveData = (potentialHash, potentialPassphrase, errCb, successCb) => {
  Message
    .findOne({
      hash: potentialHash
    }, (err, foundMsg) => {
      if (err) {
        errCb()
      } else {
        successCb(Object.assign({}, {
          name: foundMsg.name,
          message: foundMsg.message,
          expiration: foundMsg.expiration
        }))
      }
    })
}

module.exports = {
  hashAndPersistData,
  retrieveData
}