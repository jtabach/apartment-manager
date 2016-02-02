'use strict';

$(document).ready(init);

function init() {
	$('#addTenant').click(addTenant);
	popTenants();
}

function addTenant() {
	var aptId = location.pathname.substr(location.pathname.lastIndexOf("/")+1);
	var staticTenant = $("#homeless option:selected").data("mongo");
	$.ajax({
		url: `/tenants/${staticTenant}`,
		method: "PUT",
		data: {aptId: aptId}
	})
	.success(function(data) {
		$("#homeless option:selected").remove();
	})
	.fail(function(err) {
		console.error(err);
	});
}

function popTenants(){

}
