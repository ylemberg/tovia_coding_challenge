const decrypt = {
  get: (req, res) => {
    res.send('hai get decrypt')
  }
}

const encrypt = {
  post: (req, res) => {
    console.log('req.body', req.body)
    res.send('hai post encrypt')
  }
}

module.exports = {
  decrypt,
  encrypt
}