const nodeMailer=require('../config/nodemailer');

//this is way another way of exporting a method

exports.newComment=(comment)=>{
  
    console.log('inside newcomment mailer');

    nodeMailer.transporter.sendMail({
        from:'rk1864951@gmail.com',
        to:comment.user.email,
        subject:"new comment publish",
        html:'<h1>Yup,Your comment is now published </h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending the mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    })
}

