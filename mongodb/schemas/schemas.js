const User = require("./user");
const Address = require("./address");
const Type = require('./product_type');
const Category = require('./category');
const Customer = require('./customer')





var Schemas = {
  User: User,
  Address: Address,
  Type:Type,
  Category:Category,
  Customer:Customer,

};

module.exports = Schemas;