'use strict'
/*
angular.module('myApp')
	.controller('LibrosCtrl', function ($scope, $http) {
		$http.get('http://localhost:3000/api/libro/libros.json').sucess(function(data))
		$scope.libros = data
	})

	$scope.gridOptions = {
		data: 'libros'
	}
/*
angular.module('myAppServices', ['ngResource'])
	.factory('BreakinBadChar', function($resource){
  		return $resource(':resourceName.json', {
  		}, {
  			query: {
  				method:'GET', params:{
  					resourceName:'breaking_bad_char'//http://localhost:3000/api/libro/'
  				}, isArray: true
  			}
	  	});
	});