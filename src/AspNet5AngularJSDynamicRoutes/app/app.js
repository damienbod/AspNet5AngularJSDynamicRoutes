(function () {
	var mainApp = angular.module("mainApp", ["ui.router"]);

	mainApp.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
            	$urlRouterProvider.otherwise("/home/overview");

            	$stateProvider
                    .state("home", { abstract: true, url: "/home", templateUrl: "/templates/home.html" })
                        .state("overview", {
                        	parent: "home", url: "/overview", templateUrl: "/templates/overview.html", controller: "OverviewController",
                        	resolve: {

                        		FastestAnimalService: "FastestAnimalService",

                        		fastestAnimals: ["FastestAnimalService", function (FastestAnimalService) {
                        			return FastestAnimalService.getAnimals();
                        		}]
                        	}
                        })
							.state("details", {
								parent: "overview", url: "/details/:animalId", templateUrl: "/templates/details.html", controller: "DetailsController",
								resolve: {
									FastestAnimalService: "FastestAnimalService",

									fastestAnimal: ["FastestAnimalService", "$stateParams", function (FastestAnimalService, $stateParams) {
										var animalId = $stateParams.animalId;
										console.log($stateParams.animalId);
										return FastestAnimalService.getAnimal({ animalId: animalId });
									}]
								}
							})
        }
	]
    );

	mainApp.run(["$rootScope", function ($rootScope) {

		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			console.log(event);
			console.log(toState);
			console.log(toParams);
			console.log(fromState);
			console.log(fromParams);
			console.log(error);
		})

		$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
			console.log(event);
			console.log(unfoundState);
			console.log(fromState);
			console.log(fromParams);
		})

	}]);

})();
