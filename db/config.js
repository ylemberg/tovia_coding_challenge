var mongoose = require('mongoose')
var dburl = 'mongodb://test_user:test_password@ds157682.mlab.com:57682/tovia-coding-challenge'

mongoose.connect(dburl)

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dburl)
})

var exit = function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination')
    process.exit(0)
  })
}

process.on('SIGINT', exit).on('SIGTERM', exit)

require('./models')