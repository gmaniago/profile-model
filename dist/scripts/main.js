var user = new UserModel();

$(document).ready(function() {


$('.form-horizontal').on('submit', function(e) {
	e.preventDefault();
	user.set({
		name: $('#name').val(),
		email: $('#inputEmail3').val(),
		role: $('#role').val()
	});

});


});