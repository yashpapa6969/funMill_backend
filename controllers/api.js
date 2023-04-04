const NewUser = require('../controllers/users/register');
const Login = require('../controllers/users/login');
const setAddress = require('../controllers/address/setAddress');
const getAddress = require('../controllers/address/getAddresss');





var apis = {
    
    Login : Login,
    NewUser:NewUser,
   // getAddress:getAddress,
    setAddress:setAddress,

 
}

module.exports = apis;