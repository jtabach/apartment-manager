var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('list of tenants');
});

router.get('/:tenantId', function(req, res) {
	res.send(req.params.tenantId);
})

module.exports = router;