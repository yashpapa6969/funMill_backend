const NewUser = require('../controllers/users/register');
const Login = require('../controllers/users/login');
const setAddress = require('../controllers/address/setAddress');
const getAddress = require('../controllers/address/getAddresss');
const GetAllProducts = require('../controllers/product_type/GetProducts');
const UploadProduct = require('../controllers/product_type/Uploadproducts');
const RenderFile = require('../controllers/product_type/RenderFile');
const getCategory = require('../controllers/Category/getAllCategory');
const setCategory = require('../controllers/Category/uploadCategory');








var apis = {
    
    Login : Login,
    NewUser:NewUser,
    getAddress:getAddress,
    setAddress:setAddress,
    UploadProduct:UploadProduct,
    RenderFile:RenderFile,
    GetAllProducts:GetAllProducts,
    getCategory:getCategory,
    setCategory:setCategory,





 
}

module.exports = apis;