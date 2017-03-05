'use strict';

const service = require('feathers-mongoose');
const toggle = require('./toggle-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: toggle,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/toggles', service(options));

  // Get our initialize service to that we can bind hooks
  const toggleService = app.service('/toggles');

  // Set up our before hooks
  toggleService.before(hooks.before);

  // Set up our after hooks
  toggleService.after(hooks.after);
};
