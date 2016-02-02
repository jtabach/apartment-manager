'use strict';

var mongoose = require('mongoose');

var Tenant;

var tenantSchema = mongoose.Schema({
	apartmentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Apartment'
	},
	name: String,
	age: Number,
	gender: String,
	term: Date,
	salary: Number
});

Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;