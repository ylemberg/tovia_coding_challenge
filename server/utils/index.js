const bcrypt = require('bcryptjs')

const hashData = data => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT));
  const hash = bcrypt.hashSync(data, salt);
  return hash
}

const addMessageToDb = formData => {
  return hashData(formData.message + formData.name + formData.date + formData.passphrase)
}

module.exports = {
  addMessageToDb
}