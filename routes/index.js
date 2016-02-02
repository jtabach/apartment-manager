var express = require('express');
var router = express.Router();


var Apartment = require('../models/apartment');
var Tenant = require('../models/tenant');

router.get("/", function(req, res, next) {
	res.render("index");
})

router.get("/add", function(req, res, next) {
	res.render("Add");
})

module.exports = router;
