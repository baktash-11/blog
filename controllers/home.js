const BlogPost = require('../models/blogPost');
// const BlogPost = require('../models/blogPost.js');

module.exports = async(req, res)=>{
    const blogPosts= await BlogPost.find({});
    res.render('index', {blogPosts});

}