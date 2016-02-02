'use strict';

var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');

router.get('/', function(req, res) {

  res.send('list of tenants');
});

router.post('/', function(req, res) {
  Tenant.create(req.body, function(err, savedTenant) {
    if(err) return res.status(400).send(err);
    return res.send("Tenant saved:", savedTenant);
  });
})

router.get('/:tenantId', function(req, res) {
	res.send(req.params.tenantId);
})

router.put("/:tenantId", function(req, res) {
  Tenant.findById(req.params.tenantId, function(err, tenant){
    Apartment.findById(req.body.aptId, function(err, apt){
      tenant.apartmentId = apt;
      tenant.save();
    })
  })
  res.send("put recieved");
});

module.exports = router;
