var user = new UserModel();

$(document).ready(function() {

$.get ('http://tiny-pizza-server.herokuapp.com/collections/g2',
		newModel,
		'json'
		);

function newModel(data) {
	user.set(data)
}

var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'profile': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show()
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
	}
});

var app = new App();
Backbone.history.start();

newUser(user);
user.on('change', newUser);

function newUser(UserModel) {
	$('.profile-usertitle-name').html(UserModel.get('name'));
	$('.dropdown .dropdown-toggle').html(UserModel.get('name'));
	$('.profile-usertitle-job').html(UserModel.get('role'));
	$('.profile-usertitle-email').html(UserModel.get('email'));
	var newObj =	{
		name: UserModel.get('name'),
		email: UserModel.get('email'),
		role: UserModel.get('role'),
	};
		
	$.ajax({
	url: 'http://tiny-pizza-server.herokuapp.com/collections/g2',
	type: 'PUT',
	data: newObj,
	});

}

$('.form-horizontal').on('submit', function(e) {
	e.preventDefault();
	user.set({
		name: $('#name').val(),
		email: $('#inputEmail3').val(),
		role: $('#role').val(),
	});

});


});