// const mongoose=require('mongoose');

// const url = process.env.MONGO_URL; 

// console.log();

// mongoose.connect(process.env.MONGO_URL);
// mongoose.set('strictQuery', true);

// const db=mongoose.connection;

// db.on('error',console.error.bind(console,"Error connecting to mongodb"));

// db.once('open',function(){
//     console.log('connectrd to Database :: MongoDB');
// })

// module.exports=db;

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const url = process.env.MONGO_URL;

if (!url) {
  console.error("MONGO_URL is not defined in your environment.");
  process.exit(1);
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
