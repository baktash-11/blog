// const mongoose = require ('mongoose');

// // mongoose.Schema is an interface
// const Schema = mongoose.Schema;   

// const userSchema = new Schema({

//     fName: String, 
//     lName: String,
//     tilte: String, 
//     email: String, 
//     phone: String, 

// });

// const User = mongoose.model('User', userSchema);
// module.exports= User;



















const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fName :String, 
    lName : String, 
    email:String, 
    phone : String, 
    age :Number, 
    job: String,
    drives: Boolean
});

const User = mongoose.model('User', userSchema);
module.exports=User;