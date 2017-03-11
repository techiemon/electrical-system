'use strict';

const service = require('feathers-mongoose');
const building = require('./building-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: building
  };

  // Initialize our service with any options it requires
  app.use('/buildings', service(options));

  // Get our initialize service to that we can bind hooks
  const buildingService = app.service('/buildings');

	// app.use('user/:userId/buildings', {
	// 	create(data, params) {
	// 		const buildingData = Object.assign(data, {
	// 			userId: params.userId
	// 		});
	// 		return buildingService.create(buildingData);
	// 	}
	// });

  // Set up our before hooks
  buildingService.before(hooks.before);

  // Set up our after hooks
  buildingService.after(hooks.after);
};
