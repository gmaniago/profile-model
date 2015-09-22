(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var user = new UserModel();

$(document).ready(function () {

	$.get('http://tiny-pizza-server.herokuapp.com/collections/g2', newModel, 'json');

	function newModel(data) {
		user.set(data);
	}

	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'profile': 'profile',
			'edit': 'edit'
		},
		profile: function profile() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function edit() {
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
		var myObj = {
			name: UserModel.get('name'),
			email: UserModel.get('email'),
			role: UserModel.get('role')
		};

		$.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/g2',
			type: 'PUT',
			data: myObj
		});
	}

	$('.form-horizontal').on('submit', function (e) {
		e.preventDefault();
		user.set({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val()
		});
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map