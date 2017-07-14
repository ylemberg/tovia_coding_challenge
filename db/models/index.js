var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  passphrase: String,
  hash: String,
  name: String,
  message: String,
  expiration: Date
});

mongoose.model('Message', messageSchema);