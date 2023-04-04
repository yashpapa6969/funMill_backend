const express = require('express');
const router = express.Router();
//const file_upload = require('../middleware/multer/FileUpload');

const apis = require("../controllers/api");


router.post('/login',(req,res) => {apis.Login(req,res)});
router.post('/Register',(req,res) => {apis.NewUser(req,res)});
router.post('/setAddress',(req,res) => {apis.setAddress(req,res)});



module.exports = router