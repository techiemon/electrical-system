'use strict';

// building-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	userId: { type: String, required: true },
	name: { type: String, required: true },
	address1: { type: String, required: false },
	address2: { type: String, required: false },
	city: { type: String, required: false },
	state: { type: String, required: false }
});

const buildingModel = mongoose.model('building', buildingSchema);

module.exports = buildingModel;
