const express=require('express');

const router=express.Router();


//to assess the controller 

const homeController=require('../controllers/home_controller');

//this console is used to check wheather this index file is accessing or not in main index file
console.log('router loaded');

//for access the home controller using router 

router.get('/',homeController.home);

//to access the user controller which is present in user.js 
router.use('/users',require('./users'));


module.exports=router;