'use strict';

const service = require('feathers-mongoose');
const building = require('./building-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: building,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/buildings', service(options));

  // Get our initialize service to that we can bind hooks
  const buildingService = app.service('/buildings');

  // Set up our before hooks
  buildingService.before(hooks.before);

  // Set up our after hooks
  buildingService.after(hooks.after);
};
