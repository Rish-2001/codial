const Post = require('../models/post');
const User=require('../models/user');
module.exports.home = async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post

    try{

        let posts= await Post.find({}).populate('user')
        .sort('-createdAt')
    .populate({
        path:'comments',
        populate : {
           path: 'user'
        }
    });
    
    // .exec(function(err, posts){
    //     User.find({},function(err,users){

    //         return res.render('home', {
    //             title: "Codeial | Home",
    //             posts:  posts,
    //             all_users:users
    //         });
    //     })
    // })

      let users= await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts,
            all_users:users
        });
  
    }catch(err){
   
        console.log('Error',err);
    }
    

}


// Post.find({}).populate('comments').then(function());

// let posts= Post.find({}).populate('comments').then(function());

// posts.then();



