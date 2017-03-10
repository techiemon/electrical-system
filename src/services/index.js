'use strict';
const mongoose = require('mongoose');
const user = require('./user');
const toggle = require('./toggle');
const load = require('./load');
const breaker = require('./breaker');
const image = require('./image');
const room = require('./room');
const panel = require('./panel');
const building = require('./building');
const viewer = require('./viewer');
const graphql = require('./graphql');
const authentication = require('./authentication');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);

	app.configure(building);
	app.configure(panel);
	app.configure(room);
	app.configure(image);
	app.configure(breaker);
	app.configure(load);
	app.configure(toggle);
	app.configure(viewer);

  app.configure(graphql);
};
