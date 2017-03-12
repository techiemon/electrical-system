'use strict';

// breaker-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breakerSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	userId: Schema.Types.ObjectId,
	panelId: Schema.Types.ObjectId,
	label: { type: String, required: true },
	description: { type: String, required: false },
	rating: { type: Number, required: true }
});

const breakerModel = mongoose.model('breaker', breakerSchema);

module.exports = breakerModel;
