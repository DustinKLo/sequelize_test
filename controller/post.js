//post.js
const models = require('../models');
const Post = models.post;
const User = models.user;

module.exports = {
	async getAllPostsOfUser(req, res) {
		try {
			const userCollection = await User.findOne({
				id: req.params.userId,
			});

			if (userCollection) {
				const postCollection = await Post.findOne({
					userId: req.params.userId,
				});

				res.status(200).send(postCollection);
			} else {
				re.status(404).send('User Not Found');
			}
		} catch (e) {
			console.log(e);
			res.status(500).send(e);
		}
	},

	async createPost(req, res) {
		try {
			const userId = req.body.userId;
			const user = await User.findOne({ where: { id: userId } });
			if (user) {
				const post = await Post.create({
					title: req.body.title,
					content: req.body.content,
					userId: userId,
				});
				res.status(201).send(post);
			} else {
				res.status(404).json({ status: 404, error: 'User not found!' });
			}
		} catch (e) {
			console.log(e);
			res.status(400).send(e);
		}
	},

	async updatePost(req, res) {
		try {
			const postCollection = await Post.findOne({
				id: req.params.postId,
			});

			if (postCollection) {
				const updatedPost = await postCollection.update({
					title: req.body.title,
				});

				res.status(201).send(updatedPost);
			} else {
				res.status(404).send('Post Not Found');
			}
		} catch (e) {
			console.log(e);
			res.status(400).send(e);
		}
	},
};
