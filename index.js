const express=require('express');
const app=express();

const port=8000;

const expressLayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and js from sub pages in to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//to access the routes from index.js in routes

app.use('/',require('./routes'));

//set up view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log('Error: ${err}');
    }
    else{
           console.log('server is running on port',port);
    }
});