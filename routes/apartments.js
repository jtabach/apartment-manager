'use strict';

var express = require('express');
var router = express.Router();

var Apartment = require('../models/apartment');
var Tenant = require('../models/tenant');

router.get('/', function(req, res) {
	res.send('list of apartments');
}) // apartments page

router.post('/', function(req, res) {
	Apartment.create(req.body, function(err, savedApartment) {
		if(err) return res.status(400).send(err);
		return res.send("Apartment saved:", savedApartment);
	});
})

router.get("/undefined", function(req, res) {
	res.status(400).send("User is not a current tennant of an apartment, please hit the back button on your browser.");
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
