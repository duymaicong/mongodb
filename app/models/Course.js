const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');


mongoose.plugin(slug);

const Course = new Schema({
  // _id: { type: String },
  name: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String },
  videoid: { type: String },
  level: { type: String },
  slug: { type: String, slug: 'name', unique: true },
  // createdAt:{type: Date,default:Date.now},
  // uppdatedAt:{type: Date,default:Date.now},
}, { timestamps: true });

module.exports = mongoose.model('Course', Course);