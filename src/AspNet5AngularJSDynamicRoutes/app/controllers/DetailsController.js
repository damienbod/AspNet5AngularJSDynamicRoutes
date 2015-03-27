(function () {
	'use strict';

	var module = angular.module('mainApp');

	// this code can be used with uglify
	module.controller('DetailsController',
		[
			'$scope',
			'$log',
			'fastestAnimal',
			DetailsController
		]
	);

	function DetailsController($scope, $log, fastestAnimal) {
		$log.info("DetailsController called");
		$scope.message = "Animal Details";

		$scope.animal = fastestAnimal;

	}

})();
