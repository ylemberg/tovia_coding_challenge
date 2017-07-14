const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const routes = require('./routes')
const app = express()

app.use(express.static(`${__dirname}/../public/build`))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(routes)

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
