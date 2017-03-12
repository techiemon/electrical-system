'use strict';

// room-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	userId: Schema.Types.ObjectId,
	buildingId: Schema.Types.ObjectId,
	label: { type: String, required: true }
});

const roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel;
