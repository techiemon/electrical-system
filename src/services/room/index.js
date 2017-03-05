'use strict';

const service = require('feathers-mongoose');
const room = require('./room-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: room,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/rooms', service(options));

  // Get our initialize service to that we can bind hooks
  const roomService = app.service('/rooms');

  // Set up our before hooks
  roomService.before(hooks.before);

  // Set up our after hooks
  roomService.after(hooks.after);
};
