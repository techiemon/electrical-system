'use strict';

const service = require('feathers-mongoose');
const panel = require('./panel-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: panel
  };

  // Initialize our service with any options it requires
  app.use('/panels', service(options));

  // Get our initialize service to that we can bind hooks
  const panelService = app.service('/panels');

  // Set up our before hooks
  panelService.before(hooks.before);

  // Set up our after hooks
  panelService.after(hooks.after);
};
