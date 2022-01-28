const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    
    name: {type:String},
    ms: {type:String},
    
    createdAt:{type: Date,default:Date.now},
    uppdatedAt:{type: Date,default:Date.now},
  });

  module.exports = mongoose.model('Student', Student);