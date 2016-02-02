'use strict';

var express = require('express');
var router = express.Router();

var Apartment = require('../models/apartment');

router.get('/', function(req, res) {
	res.send('list of tenants');
}) // apartments page

router.get('/:appId', function(req, res) {
	res.send(req.params.appId);
}) // single apartment info





module.exports = router;