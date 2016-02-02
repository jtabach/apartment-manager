"use strict";

$(document).ready(init)

function init(){
	$("#newTenant").submit(addTenant);
	$("#newProperty").submit(clicky);
}

function addTenant(e){
	e.preventDefault();
	var tenant = {};
	// tenant.name = {};

	if($("#firstName").val()){
		tenant.first = $("#firstName").val();
	}
	// } else{
	// 	var name = {}
	// 	name.first = $("#firstName").val();
	// 	tenant.name = name;
	// }

	if($("#lastName").val()){
		tenant.last = $("#lastName").val();
			// else{
			// 	var name = {}
			// 	name.last = $("#lastName").val();
			// 	tenant.name = name;
			// }
	}
	// tenant.name = {
	// 	first: $("#firstName").val(),
	// 	last: $("#lastName").val()
	// }

	if($("#age").val()){
		tenant.age  = $("#age").val();
	}
	if($("#gender").val()){
		tenant.gender = $("#gender").val().toLowerCase();
	}
	if($("#salary").val()){
		tenant.salary = $("#salary").val();
	}
	console.log(tenant);

	$.post("/tenants", tenant)
	.success(function(data){
		console.log("Added tenant: ",data);
	})
	.fail(function(err){
		alert(err);
	})
}

function clicky(e) {
	e.preventDefault();
	console.log("Clicky!")
}