'use strict';

var mongoose = require('mongoose');

var Tenant;

var tenantSchema = mongoose.Schema({
	apartmentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Apartment'
	},
	name: {
		first: { type: String, default: "John" },
		last: { type: String, default: "Doe" }
	},
	age: { type: Number, default: 40 },
	gender: { type: String, default: "male" },
	term: { type: Date, default: Date.now() },
	salary: { type: Number, default: 84000 }
});

tenantSchema.statics.create = function(tenantData, cb) {
	var tenant = new Tenant(tenantData);
	tenant.save(cb);
};

Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
