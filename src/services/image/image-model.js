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
	panelId: { type: String, required: false },
	loadId: { type: String, required: false },
	toggleId: { type: String, required: false },
	url: { type: String, required: true }
});

const imageModel = mongoose.model('image', imageSchema);

module.exports = imageModel;
