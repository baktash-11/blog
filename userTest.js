// const mongoose = require('mongoose');
// const User = require('./models/user');

// // mongoose.connect('mongodb://localhost/my_Database', {useNewUrlParser:true});
// mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});
// User.create({
//     fName:'Baktash', 
//     lName:'Sana', 
//     tilte: 'Web-Devloper', 
//     email: 'baktash@gmail.com',
//     phone: '9054431881'
// } ,(error, user)=>{
//     console.log(error, user);
// });



const mongoose = require('mongoose');
const User = require('./models/user')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

User.create({
    fName: 'Baktash', 
    lName: 'Sana', 
    email:'baktash@hotmail.com', 
    phone:'9054431031', 
    age:40,
    drives: true
}, (error, user)=>{
    console.log(error, user)
});

User.find({}, (error, user)=>{
    console.log(error, user)
});