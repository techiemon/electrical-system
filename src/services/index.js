'use strict';
const viewer = require('./viewer');
const toggle = require('./toggle');
const load = require('./load');
const breaker = require('./breaker');
const image = require('./image');
const room = require('./room');
const panel = require('./panel');
const building = require('./building');
const graphql = require('./graphql');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
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
