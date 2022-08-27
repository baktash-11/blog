


const express = require('express');
const ejs = require('ejs');
const app =new express();

const port = 4000;


// router
const routs = require('./routs');

// mongodb and db connection string
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});
const fileUpload = require('express-fileupload');


//controllers 
const homeController = require('./controllers/home');
const storeController= require('./controllers/storePost');
const getPostController = require('./controllers/getPost');

const validateMiddleware = require('./middleware/validationMiddleware');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(fileUpload());

app.set('view engine', 'ejs');





// app.use('/', routs());






app.get('/', homeController);
app.get('/posts/new',  getPostController);
// app.get('/posts/:id', getPostController);
app.post('/posts/store', storeController);








app.listen(port, () => console.log(`http://localhost:${port}`))