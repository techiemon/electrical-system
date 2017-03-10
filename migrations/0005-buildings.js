
var mongodb = require('mongodb');

exports.up = function(db, next){

	var users = db.collection('users');
	var buildings = db.collection('buildings');
	var ud = users.find();

	var c = 0;
	var moveon = function() {
		c++;
		if (c === 4) {
			next();
		}
	}

	ud.forEach(function(u, i) {
		buildings.insert({
			userId: u._id,
			name: 'Electrical Panel',
			address1: '160 Suffolk St.',
			address2: '',
			city: 'Holyoke',
			state: 'MA'
		}, moveon() );
	});

};

exports.down = function(db, next){
    next();
};
