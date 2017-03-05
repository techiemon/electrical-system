'use strict';

// load-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loadSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	breakerId: { type: String, required: true },
	label: { type: String, required: true },
	type: { type: String, required: true }
});

const loadModel = mongoose.model('load', loadSchema);

module.exports = loadModel;
