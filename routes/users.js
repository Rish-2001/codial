const express=require('express');

const router=express.Router();

const passport=require('passport');
//to access the usercontroller ....
const userController=require('../controllers/user_controller');


//to access the profile page using router function
router.get('/profile/:id',passport.checkAuthentication,userController.profile);
router.post('/update/:id',passport.checkAuthentication,userController.update);

router.get('/sign-up',userController.signUp);

router.get('/sign-in',userController.signIn);

router.post('/create',userController.create);


// router.post('/create-session',userController.createSession);
//use passport as amiddleware to authenticate

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),userController.createSession);


router.get('/sign-out',userController.destroySession);

module.exports=router;