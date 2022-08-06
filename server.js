

const express = require('express');
const ejs = require('ejs');
const app =new express();
const path = require('path');
const port = 4000;



app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, './public/pages/index.html'))
    res.render('index')
    console.log(req.url)
});
app.get('/about', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
});
app.get('/contact', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
});
app.get('/post', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
});

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`http://localhost:${port}`))