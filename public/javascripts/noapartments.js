$(document).ready(init)

function init(){
	swal({
		title: "There are no apartments in the database",
		text: "Redirecing you to the Add page"
	},function(){
		location.href = "/add";
	});
}