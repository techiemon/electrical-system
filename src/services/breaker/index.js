'use strict';

const service = require('feathers-mongoose');
const breaker = require('./breaker-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: breaker
  };

  // Initialize our service with any options it requires
  app.use('/breakers', service(options));

  // Get our initialize service to that we can bind hooks
  const breakerService = app.service('/breakers');

  // Set up our before hooks
  breakerService.before(hooks.before);

  // Set up our after hooks
  breakerService.after(hooks.after);
};
