const BlogPost = require('../models/blogPost');

module.exports = async (req, res)=>{
    const blogPost = await BlogPost.findById(req.params.id)
    console.log(blogPost);
    res.render('post',{
        blogPost
    });
}