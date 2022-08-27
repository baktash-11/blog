


const express = require('express');
const ejs = require('ejs');
const app =new express();
const path = require('path');
const port = 4000;
const BlogPost= require('./models/blogPost')

// router
const routs = require('./routs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(fileUpload());

app.set('view engine', 'ejs');

// app.use(newfunc);



const about = require('./controllers/about');
const newPostController = require('./controllers/newPost');
const post = require('./controllers/posts');
const contact = require('./controllers/contact');
app.use('/', routs());



app.get('/posts/new', newPostController);





// post request
// app.post('/post/new', (req, res)=>{
//     BlogPost.create(req.body);
//     console.log(req.body);
//     res.redirect('/');
// });
app.post('/post/new', validationMiddleWare,(req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img' , image.name='new.jpg'), async(error)=>{

        await BlogPost.create({...req.body, image:'/img/'+ image.name});
        console.log(req.body);
        res.redirect('/');
    });
   
});

// adding validation middle ware 
function validationMiddleWare(req, res , next){
    if( req.body.title === null || req.files == null ){
        return res.redirect('/posts/new');
    }
    next();
}

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`http://localhost:${port}`))