const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
