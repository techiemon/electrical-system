'use strict';

// image-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	panelId: Schema.Types.ObjectId,
	loadId: Schema.Types.ObjectId,
	toggleId: Schema.Types.ObjectId,
	url: { type: String, required: true }
});

const imageModel = mongoose.model('image', imageSchema);

module.exports = imageModel;
