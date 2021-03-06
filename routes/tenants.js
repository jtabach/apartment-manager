'use strict';

var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');

router.get('/', function(req, res) {
	Tenant.find({}, function(err, tenants){
		if(err) return res.status(400).send(err);
	  res.render('tenants', {tenants: tenants});
	})
});

router.post('/', function(req, res) {
  Tenant.create(req.body, function(err, savedTenant) {
    savedTenant.name.first = req.body.first;
    savedTenant.name.last = req.body.last;
    delete savedTenant.first;
    delete savedTenant.last;
    savedTenant.save();
    if(err) return res.status(400).send(err);
    return res.send("Tenant saved:");
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
  res.send("Tenant moved into appartment");
});

router.delete("/:tenantId", function(req, res){
  Tenant.findById(req.params.tenantId, function(err, tenant){
      tenant.apartmentId = undefined;
      tenant.save();
  })
  res.send("Tenant evicted");
});

module.exports = router;
