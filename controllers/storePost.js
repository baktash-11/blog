const BlogPost = require('../models/blogPost');

const path = require('path');

module.exports = async (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname , '..', 'public/image', image.name) ,async (error)=>{
        await BlogPost.create({
            ...req.body, 
            image:'/img/'+ image.name

        });
        res.redirect('/');
    })
}