'use strict';

var mongoose = require('mongoose');

var Apartment;

var apartmentSchema = mongoose.Schema({
	rooms: Number,
	rentPerRoom: Number,
	imageurl: String,
	squareFeet: Number
});

Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;