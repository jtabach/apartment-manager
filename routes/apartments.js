'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");

var Apartment = require('../models/apartment');
var Tenant = require('../models/tenant');

router.get('/', function(req, res) {
	res.send('list of tenants');
}) // apartments page

router.post('/', function(req, res) {
	Apartment.create(req.body, function(err, savedApartment) {
		if(err) return res.status(400).send(err);
		return res.send("Apartment saved:", savedApartment);
	});
})

router.get('/:aptId', function(req, res) {
	Apartment.findById(req.params.aptId, function(err, apartment) {
		if (err) return res.status(400).send(err);
		Tenant.find({apartmentId: req.params.aptId}, function (err, tenants) {
			if (err) return res.status(400).send(err);
			return tenants ? res.render('apartmentDetails', apartment) : res.render('apartmentDetails', apartment, tenants);
		});
	});
}) // single apartment info

// router.put('/:appId', function(req, res) {
// 	res.send('edit apartment');
// })





module.exports = router;
