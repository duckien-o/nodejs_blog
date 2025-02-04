const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = new Schema({
   name : String,
   description : {type: String , maxLenght: 6000},
   createdAt : {type: Date , default: Date.now },
   updateAt : {type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);
