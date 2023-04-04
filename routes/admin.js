const express = require('express');
const router = express.Router();
const file_upload = require('../middleware/multer/FileUpload');

const apis = require("../controllers/api");

router.post('/login',(req,res) => {apis.Login(req,res)});

router.post('/product',file_upload.array('types',10),(req,res) => {apis.UploadProduct(req,res)});

router.post('/setcategory',(req,res) => {apis.setCategory(req,res)});

module.exports  =  router