'use strict';
module.exports = (sequelize, DataTypes) => {
	let user = sequelize.define('user', {
		email: DataTypes.STRING,
	});

	user.associate = function(models) {
		user.hasMany(models.post, {
			foreignKey: 'userId',
			as: 'posts',
		});
	};
	return user;
};
