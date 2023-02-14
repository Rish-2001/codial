const express=require('express');

const router=express.Router();

//to access the usercontroller ....
const userController=require('../controllers/user_controller');


//to access the profile page using router function
router.get('/profile',userController.profile);



module.exports=router;