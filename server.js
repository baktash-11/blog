


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

function newfunc (req, res, next){
    // console.log(req.url);
    console.log("this is a middleware function");
    next();
}

app.use('/', routs());
// app.get('/', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, './public/pages/index.html'))
//     res.render('index')
//     console.log(req.url)
// });
app.get('/about', newfunc, (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
});
app.get('/contact', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
});
app.get('/post', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
});


app.get('/posts/new',(req, res)=>{
    
    res.render('create')
});

// post request
// app.post('/post/new', (req, res)=>{
//     BlogPost.create(req.body);
//     console.log(req.body);
//     res.redirect('/');
// });
app.post('/post/new', validationMiddleWare,(req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img' , image.name), async(error)=>{

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