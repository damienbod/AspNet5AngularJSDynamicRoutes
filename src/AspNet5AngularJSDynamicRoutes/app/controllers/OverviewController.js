(function () {
	'use strict';

	var module = angular.module("mainApp");

	// this code can be used with uglify
	module.controller("OverviewController",
		[
			"$scope",
			"$log",
			"fastestAnimals",
			//"fastestAnimals",
			OverviewController
		]
	);

	function OverviewController($scope, $log, fastestAnimals) {
		$log.info("OverviewController called");
		$scope.message = "Overview";

		$log.info(fastestAnimals);
		$scope.animals = fastestAnimals;
	
	}
})();
