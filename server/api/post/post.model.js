// server/api/comment/post.model.js
'use strict';

 var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
      });

    var PostSchema = new Schema({
      title: { type: String, required: true },
      link: { type: String, optional: true },
      username: { type: String, required: true },
     comments: [CommentSchema],
	//comments: [{ body: String, date: String }],
      upvotes: Number
    });

    module.exports = mongoose.model('posts', PostSchema);
	
	//used url to bring back all objects
	
	//http://localhost:9000/api/posts
	
	
			/*
		{
"title": "hola0",
"link":"holo1",
"username": "hola",
"comments": ["josh morgan", "lenin lebowsky"],
"upvotes": 33
}

	*/
	
	
	
	
	/*
	
	{
"title": "hola0",
"link":"holo1",
"username": "hola"
}
	*/
	
	
	

	
	
	
	
	
	
	//comment
	//{"body":"Patrick", "author":"dingle","upvotes": "24"}
	//postchema
	//	{"title":"Patrick", "link":"dingle","username": "24","comments": [],"upvotes": "12/12/12"}
	//{"title":"Patrick", "link":"dingle","username": "24","comments": [{"body":"Patrick", "author":"dingle","upvotes": "24"},{"body":"Patrick", "author":"dingle","upvotes": "24"}],"upvotes": "12/12/12"}