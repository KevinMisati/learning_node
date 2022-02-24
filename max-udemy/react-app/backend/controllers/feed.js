const { validationResult } = require("express-validator")

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ 
      _id:"1",
      title: 'First Post', 
      content: 'This is the first post!', imageUrl:"https://images.unsplash.com/photo-1640622302588-aefc0da2b58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" ,
      creator: {
        name: "Kevin Misati",
        
      },
      createdAt: new Date()
    }
    ],
      
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.status(422).json({
      message:"Validation failed, entered data is incorrect",
      errors:errors.array()
    })
  }
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({

    message: 'Post created successfully!',
    post: {
       _id: new Date().toISOString(), 
       title: title, 
       content: content,
       creator:{
         name:"Kevin Misati"
       },
       createdAt:new Date()
       }
  });
};
