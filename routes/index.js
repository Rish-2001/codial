const express=require('express');

const router=express.Router();


//to assess the controller 

const homeController=require('../controllers/home_controller');

console.log('router loaded');

//for access the home controller using router 

router.get('/',homeController.home);


module.exports=router;