'use strict';

// panel-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const panelSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	buildingId: Schema.Types.ObjectId,
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	slots: { type: Number, required: true },
});

const panelModel = mongoose.model('panel', panelSchema);

module.exports = panelModel;
