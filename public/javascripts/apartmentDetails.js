'use strict';

$(document).ready(init);

function init() {
	$('#addTenant').click(addTenant);
	checkSpace();
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
		checkSpace();
	})
	.fail(function(err) {
		console.error(err);
	});
}

function checkSpace(){
	var tenants = $("#tenants").find("tr").length;
	var rooms = +$("#rooms").text().match(/[0-9]+/g);
	if(tenants >= rooms){
		$("#homelessContainer").hide();
	}
}
