const mongoose = require('mongoose');
const BlogPost = require('./models/blogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

console.log('mongoose is running :) ')

BlogPost.create({
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", 
    body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui illum officia. Expedita quidem in ipsum, quis voluptate repellendus mollitia excepturi assumenda voluptas veritatis dolorum, eum, velit possimus? Quas obcaecati provident repudiandae cum totam saepe eveniet, voluptas nulla consequuntur placeat accusamus fuga. Expedita facere est quo quis laboriosam dolor eveniet debitis excepturi a ipsum aspernatur, porro, neque et? Dolore maiores nostrum sapiente magnam ut voluptate alias dolores, deleniti hic rem!'
},(error, blogpost)=>{
    console.log(error , blogpost)
});