const express = require('express')
const rout = express.Router();
module.exports=()=>{

    rout.get('/', (req, res)=>{
        // res.sendFile(path.resolve(__dirname, './public/pages/index.html'))
        res.render('index')
        console.log(req.url)
    });
    return rout;
};

