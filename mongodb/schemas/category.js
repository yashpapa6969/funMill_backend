const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const _Category = new Schema({
    type: {type :String, required : true},
    type_id: {type: String, default: ()=> uuidv4()},
 });

  var CategorySchema = _Category;
  // compile schema to model
  var Category = mongoose.model('Category', CategorySchema, 'category');
  module.exports = Category;