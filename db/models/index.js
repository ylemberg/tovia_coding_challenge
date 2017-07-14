var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  passphrase: String,
  hash: String,
  name: String,
  message: String,
  expiration: Date
});

mongoose.model('Message', messageSchema);