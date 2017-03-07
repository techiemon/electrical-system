
var mongodb = require('mongodb');

exports.up = function(db, next){
	var users = db.collection('users');
	var buildings = db.collection('buildings');
	var ud = users.find();
	ud.forEach(function(u) {
		console.log(u);
	});
    next();
};

exports.down = function(db, next){
    next();
};
