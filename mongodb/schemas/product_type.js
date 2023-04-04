const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const _Type = new Schema({
    productName: {type :String, unique : false, required : true},
    productDescription: {type :String, unique : false, required : true},
    type: {type :String, required : true},
    quantity: {type :String, required : true},
    price: {type :String, required : true},
    num_files : {type:Number,require:false},
    filenames : {type:[String],required : false},
    product_id: {type: String, default: ()=> uuidv4()},
    type_id: {type: String, default: ()=> uuidv4()},
 });

  var TypeSchema = _Type;
  // compile schema to model
  var Type = mongoose.model('Type', TypeSchema, 'type');
  module.exports = Type;