'use strict';

const service = require('feathers-mongoose');
const image = require('./image-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: image,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/images', service(options));

  // Get our initialize service to that we can bind hooks
  const imageService = app.service('/images');

  // Set up our before hooks
  imageService.before(hooks.before);

  // Set up our after hooks
  imageService.after(hooks.after);
};
