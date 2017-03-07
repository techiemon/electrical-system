
var mongodb = require('mongodb');

exports.up = function(db, next){
	var users = db.collection('users');
	users.insert({
		firstName: 'jham',
		lastName: 'John',
		username: 'Hamson'
	}, next);
};

exports.down = function(db, next){
    next();
};
