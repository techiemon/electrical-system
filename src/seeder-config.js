var mongoose = require('mongoose');

const seedPanel = function(building, seed) {
	console.info(`What panel? ${building._id}`);
	return seed({
		path: 'panels',
		template: {
			buildingId: () => building._id,
			name: '{{lorem.word}}',
			rating: 20,
			slots: 20
		},
		callback(panel, seed) {
			console.info(`Happy panel ${panel._id}!`);
		}
	});
};

const seedBuildings = function(user, seed) {
	return seed({
		count: 2,
		path: 'buildings',
		template: {
			userId: () => user._id,
			name: '{{company.companyName}}',
			address1: '{{address.streetAddress}}',
			address2: '{{address.secondaryAddress}}',
			city: '{{address.city}}',
			state: '{{address.state}}'
		},
		callback(building, seed) {
			console.info(`Happy building ${building._id}!`);
			return seedPanel(building, seed);
		}
	});
};

module.exports = {
  services: [
    {
      path: 'users',
			count: 20,
      template: {
				username: '{{internet.email}}',
        firstName: '{{name.firstName}}',
				lastName: '{{name.lastName}}',
        password: 'password'
      },
			callback(user, seed) {
				return seedBuildings(user, seed);
			}
    },

  ]
};
