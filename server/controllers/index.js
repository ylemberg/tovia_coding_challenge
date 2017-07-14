const decrypt = {
  get: (req, res) => {
    res.send('hai get decrypt')
  }
}

const encrypt = {
  post: (req, res) => {
    res.send('hai post encrypt')
  }
}

module.exports = {
  decrypt,
  encrypt
}