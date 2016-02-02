'use strict';

var mongoose = require('mongoose');

var Apartment;

var apartmentSchema = mongoose.Schema({
	rooms: { type: Number, default: 3 },
	rentPerRoom: { type: Number, default: 500 },
	imageURL: { type: String, default: "http://2010-2014.commerce.gov/sites/default/files/images/2012/september/energy_house_spring_2012_small.jpg" },
	squareFeet: { type: Number, default: 1750 }
});

apartmentSchema.statics.create = function(aptData, cb) {
	var apartment = new Apartment(aptData);
	apartment.save(cb);
};

Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
