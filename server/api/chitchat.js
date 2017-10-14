var chitchat = require('../models/chitchat');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/chitchat', function(req, res){
		chitchat.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/chitchat', function(req, res){
		//console.log('here i am');
		var post = new chitchat();
		post.name = req.body.name;
		// post.image = req.body.image;
		post.description = req.body.description;
 		post.save(function(err, post){
			if(err) res.send(err);
				res.json(post);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Post.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmal_cat', function(req, res){
        console.log(req.body.path)
		chitchat.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
console.log(post)
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/editparmal', function(req, res){
                //console.log(req.body);
		Post.findById({'_id':req.body.id}, function(err, post){
			if(err) res.send(err);
		post.title = req.body.title;
                post.description = req.body.description;
                post.simage = req.body.simage;
                post.himage = req.body.himage;
                post.paramal = req.body.paramal;
                post.metadescription = req.body.metadescription;
                post.metakeywords = req.body.metakeywords;
			post.save(function(err){
				if(err) res.send(err);
				res.json({ message: 'Post updated!' });
			})
		});
	});
	// delete a post
// 	apiRouter.post('/deletecategory', function(req, res){
// 		chitchat.remove({
// 			_id: req.body.id
// 		}, function(err, post){
// 			if(err) res.send(err);
// 			res.json({ message: 'Post deleted!' });
// 		})
// 	});
// };

apiRouter.post('/deleteuser', function(req, res) {
        User.remove({
            _id: req.body.id
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({message: 'User deleted!'});
        })
    });
};