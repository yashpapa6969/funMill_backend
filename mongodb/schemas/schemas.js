const User = require("./user");
const Address = require("./address");
const Type = require('./product_type');
const Category = require('./category')




var Schemas = {
  User: User,
  Address: Address,
  Type:Type,
  Category:Category,

};

module.exports = Schemas;