const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const _Customer = new Schema({
    productName: {type :String, unique : false, required : true},
    type: {type :String, required : true},
    quantity_bought: {type :String, required : true},
    price: {type :String, required : true},
    product_id: {type: String, default: ()=> uuidv4()},
    type_id: {type: String, default: ()=> uuidv4()},
    user_id: {type: String, default: ()=> uuidv4()},
    streetAddress: {type :String, required : true},
    state : {type : String, required :true},
    city : {type : String, required :true},
    pincode : {type : String, required :true},
    phoneNo : {type : String, required :true},
    apartment : {type : String, required :false},
    payment_done : {type : String, required :true},
    total_price: {type :String, required : true},


    

 });

  var CustomerSchema = _Customer;
  // compile schema to model
  var Customer = mongoose.model('Customer', CustomerSchema, 'customer');
  module.exports = Customer;