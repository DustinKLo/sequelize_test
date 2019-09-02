const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const controller = require('./controller');
const userController = controller.user;
const postController = controller.post;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
	res.status(200).json({
		data: 'Welcome Node Sequlize API v1',
	});
});

app.get('/api/users', userController.getAllUsers);
app.post('/api/user/create', userController.createUser);
app.put('/api/user/:userId', userController.updateUser);
app.get('/api/:userId/posts', postController.getAllPostsOfUser);
app.post('/api/post/create', postController.createPost);
app.put('/api/:postId', postController.updatePost);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening to port ${PORT}!`);
});
