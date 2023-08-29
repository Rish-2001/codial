const Comment = require('../models/comment');
const Post = require('../models/post');
const commentMailer=require('../mailers/comments_mailer');
module.exports.create = async function(req, res){
    
    
    
    
    
    // Post.findById(req.body.post, function(err, post){

    //     if (post){
    //         Comment.create({
    //             content: req.body.content,
    //             post: req.body.post,
    //             user: req.user._id
    //         }, function(err, comment){
    //             // handle error

    //             post.comments.push(comment);
    //             post.save();

    //             res.redirect('/');
    //         });
    //     }

    // });

    //using asyn way

   

        try{
            let post = await Post.findById(req.body.post);
    
            if (post){
                let comment = await Comment.create({
                    content: req.body.content,
                    post: req.body.post,
                    user: req.user._id
                });
    
                post.comments.push(comment);
                post.save();
                Comment=await comment.populate('user','name email').execPopulate();
                commentMailer.newComment(comment);
                
                
                if(req.xhr){
                   

                    return res.status(200).json({
                        data:{
                            comment:comment
                        },
                        message:"Post created"
                    })
                }
                req.flash('success',"Comment published");
                res.redirect('/');
            }
        }catch(err){
            console.log('Error', err);
            return;
        }
        
    }



 

//deleting the comments

// module.exports.destroy=function(req,res){

//     Comment.findById(req.params.id,function(err,comment){
 
//         if(Comment.user==req.user.id){
//             let postId=comment.post;
//             comment.remove();

//             Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}},function(err,post){
//                 return res.redirect('back');
//             })

//         }
//         else{
        
//             return res.redirect('back');
//         }
//     })
// }

// module.exports.destroy = function(req, res){
//     Comment.findById(req.params.id, function(err, comment){
//         if (comment.user == req.user.id){

//             let postId = comment.post;

//             comment.remove();

//             Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
//                 return res.redirect('back');
//             })
//         }else{
//             return res.redirect('back');
//         }
//     });
// }

//another way of destroy

module.exports.destroy = async function(req, res){

    try{
        let comment = await Comment.findById(req.params.id);

        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            let post = Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});

            return res.redirect('back');
        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('Error', err);
        return;
    }
    
}