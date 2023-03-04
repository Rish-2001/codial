const mongoose=require('mongoose');
const { schema } = require('./user');


const postSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    

    
},{
    timestamps:true
});

const Post=mongoose.model('post',postSchema);

module.exports=Post;