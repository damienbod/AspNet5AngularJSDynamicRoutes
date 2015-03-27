(function () {
	var mainApp = angular.module("mainApp", ["ui.router"]);

	mainApp.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
            	//$urlRouterProvider.otherwise("/home");

            	$stateProvider
                    .state("home", { url: "/home", templateUrl: "/templates/home.html" })
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
								parent: "overview", url: "/details", templateUrl: "/templates/details.html"
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
			console.log(unfoundState.to); // "lazy.state"
			console.log(unfoundState.toParams); // {a:1, b:2}
			console.log(unfoundState.options); // {inherit:false} + default options
		})

	}]);

})();

//resolve: {

//	FastestAnimalService: "FastestAnimalService",

//	fastestAnimals: function (FastestAnimalService) {
//		return FastestAnimalService.getAnimals().$promise;
//	}
//}