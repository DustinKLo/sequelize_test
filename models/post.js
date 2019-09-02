'use strict';
module.exports = (sequelize, DataTypes) => {
	let post = sequelize.define('post', {
		title: DataTypes.STRING,
		content: DataTypes.TEXT,
	});

	post.associate = function(models) {
		post.belongsTo(models.user, {
			onDelete: 'CASCADE',
			foreignKey: 'userId',
		});
	};

	return post;
};
