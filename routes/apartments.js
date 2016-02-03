'use strict';

var express = require('express');
var router = express.Router();

var Apartment = require('../models/apartment');
var Tenant = require('../models/tenant');

router.get('/', function(req, res, next) {
	var totalRent = 0;
	Apartment.find({}, function(err, apartments) {
		if(apartments.length === 0){
			console.log("No apts")
			return res.render("noapartments");
		}

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
					return res.render('apartments', renderData);
				}
			});
		});
	});
});

router.post('/', function(req, res) {
	Apartment.create(req.body, function(err, savedApartment) {
		if(err) return res.status(400).send(err);
		return res.send("Apartment saved:");
	});
})

router.get("/undefined", function(req, res) {
	res.render("noapartment");
})

router.get('/:aptId', function(req, res) {
	var renderData = {};
	Apartment.findById(req.params.aptId, function(err, apartment) {
		if (err) return res.status(400).send(err);
		Tenant.find({apartmentId: req.params.aptId}, function (err, tenants) {
			if (err) return res.status(400).send(err);
			renderData.apartment = apartment;
			Tenant.find({apartmentId: {$exists: false}}, function(err, homeless){
				if (err) return res.status(400).send(err);
				if(tenants) renderData.tenants = tenants;
				renderData.homeless = homeless;
				res.render("apartmentDetails", renderData);
			})
		});
	});
}) // single apartment info

// router.put('/:appId', function(req, res) {
// 	res.send('edit apartment');
// })





module.exports = router;
