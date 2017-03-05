'use strict';

const service = require('feathers-mongoose');
const load = require('./load-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: load,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/loads', service(options));

  // Get our initialize service to that we can bind hooks
  const loadService = app.service('/loads');

  // Set up our before hooks
  loadService.before(hooks.before);

  // Set up our after hooks
  loadService.after(hooks.after);
};
