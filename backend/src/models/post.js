const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Post
const postSchema = new Schema({
  id: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true },
  description: { type: String, trim: true },
  tags: { type: [String], default: [], set: (v) => Array.isArray(v) ? v.map(tag => tag.trim()).filter(Boolean) : [],}, 
});

const post = mongoose.model('post', postSchema);

module.exports = post;