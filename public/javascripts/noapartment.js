$(document).ready(init)

function init(){
	swal({
		title: "This person is not a current tenant",
		text: "Redirecing you back to the Tenants page"
	},function(){
		location.href = "/tenants";
	});
}