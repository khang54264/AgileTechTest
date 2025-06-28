const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//User
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
});

const user = mongoose.model('user', userSchema);

module.exports = user;