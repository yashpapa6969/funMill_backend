const express = require('express');
const router = express.Router();
const file_upload = require('../middleware/multer/FileUpload');

const apis = require("../controllers/api");


router.post('/login',(req,res) => {apis.Login(req,res)});
router.post('/Register',(req,res) => {apis.NewUser(req,res)});
router.post('/setAddress',(req,res) => {apis.setAddress(req,res)});
router.post('/getAddress',(req,res) => {apis.getAddress(req,res)});
router.get('/getAddress/:user_id',(req,res) => {apis.getAddress(req, res)});
router.get('/getallproducts',(req,res) => {apis.GetAllProducts(req,res)});
router.get('/notes/:filename',(req,res)=> {apis.RenderFile(req,res)});
router.get('/getallcategory',(req,res) => {apis.getCategory(req,res)});








module.exports = router