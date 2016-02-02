var express = require('express');
var router = express.Router();


var Apartment = require('../models/apartment');
var Tenant = require('../models/tenant');

router.get('/', function(req, res, next) {
	var totalRent = 0;
	Apartment.find({}, function(err, apartments) {
		if (err) return res.status(400).send(err);
		apartments.forEach(function(apartment, i) {
			var aptRent = apartment.rentPerRoom;
			Tenant.find({apartmentId: apartment.id}, function(err, tenants) {
				totalRent += apartment.rentPerRoom*tenants.length;
				if(i === apartments.length -1){
					var renderData = {};
					renderData.apartments = apartments;
					renderData.title = "We're Awesome!";
					renderData.totalRent = totalRent;
					return res.render('index', renderData);
				}
			});
		});
	});
});

module.exports = router;
