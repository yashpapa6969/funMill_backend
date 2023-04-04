const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const _Address = new Schema({
    streetAddress: {type :String, required : true},
    state : {type : String, required :true},
    city : {type : String, required :true},
    pincode : {type : String, required :true},
    phoneNo : {type : String, required :true},
    apartment : {type : String, required :false},
    user_id: {type: String, default: ()=> uuidv4()}
  });

  var AddressSchema = _Address;
  // compile schema to model
  var Address = mongoose.model('Address', AddressSchema, 'address');
  module.exports = Address;