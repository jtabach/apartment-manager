"use strict";

$(document).ready(init)

function init(){
	$("#newTenant").submit(addTenant);
	$("#newProperty").submit(addProperty);
}

function addTenant(e){
	e.preventDefault();
	var tenant = {};

	if($("#firstName").val()){
		tenant.first = $("#firstName").val();
	}

	if($("#lastName").val()){
		tenant.last = $("#lastName").val();
	}

	if($("#age").val()){
		tenant.age  = $("#age").val();
	}
	if($("#gender").val()){
		tenant.gender = $("#gender").val().toLowerCase();
	}
	if($("#salary").val()){
		tenant.salary = $("#salary").val();
	}

	$.post("/tenants", tenant)
	.success(function(data){
		console.log("Added tenant: ",data);
		location.href = "/tenants";
	})
	.fail(function(err){
		console.error(err);
	})
}

function addProperty(e) {
	e.preventDefault();
	var apartment = {};

	if($("#rooms").val()){
		apartment.rooms = $("#rooms").val();
	}

	if($("#rent").val()){
		apartment.rentPerRoom = $("#rent").val();
	}

	if($("#image").val()){
		apartment.imageURL  = $("#image").val();
	}
	if($("#squareFootage").val()){
		apartment.squareFeet = $("#squareFootage").val().toLowerCase();
	}

	$.post("/apartments", apartment)
	.success(function(data){
		console.log("Added apartment: ",data);
		location.href = "/";
	})
	.fail(function(err){
		console.error(err);
	})
}
