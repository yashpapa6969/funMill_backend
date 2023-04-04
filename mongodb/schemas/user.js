const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;




const _User = new Schema({
    fname: {type :String, unique : false, required : true},
    lname: {type :String, unique : false, required : true},
    emailAddress: {type :String, unique : true, required : true},
    password: {type :String, unique : false, required : true,},
    cpassword: {type :String, unique : false, required : true,},

    user_id: {type: String, default: ()=> uuidv4()},
    
  });

  var UserSchema = _User;
  // compile schema to model
  var User = mongoose.model('User', UserSchema, 'user');
  module.exports = User;
