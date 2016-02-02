'use strict';

$(document).ready(init);

function init() {
	$('#addTenant').click(addTenant);
}

function addTenant() {
	var aptId = location.pathname.substr(location.pathname.lastIndexOf("/")+1);
	var staticTenant = "/56b0360a8b291791ad461655";
	$.ajax({
		url: `/tenants${staticTenant}`,
		method: "PUT",
		data: {aptId: aptId}
	})
	.success(function(data) {
		console.log('tenant', staticTenant);
		console.log('aptId', aptId);
	})
	.fail(function(err) {
		console.log(err);
	});
}
