const models = require('../models');
const User = models.user;

module.exports = {
	async getAllUsers(req, res) {
		try {
			const userCollection = await User.findAll();

			res.status(200).send(userCollection);
		} catch (e) {
			console.log(e);
			res.status(500).send(e);
		}
	},

	async createUser(req, res) {
		try {
			const userCollection = await User.create({
				email: req.body.email,
			});

			res.status(201).send(userCollection);
		} catch (e) {
			console.log(e);
			res.status(400).send(e);
		}
	},

	async updateUser(req, res) {
		try {
			const userCollection = await User.findOne({
				id: req.params.userId,
			});

			if (userCollection) {
				const updatedUser = await User.update({
					id: req.body.email,
				});
				res.status(201).send(updatedUser);
			} else {
				res.status(404).send('User Not Found');
			}
		} catch (e) {
			console.log(e);
			res.status(500).send(e);
		}
	},
};
