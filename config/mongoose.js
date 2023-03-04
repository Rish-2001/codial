const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeial_developement');
mongoose.set('strictQuery', true);

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongodb"));

db.once('open',function(){
    console.log('connectrd to Database :: MongoDB');
})

module.exports=db;