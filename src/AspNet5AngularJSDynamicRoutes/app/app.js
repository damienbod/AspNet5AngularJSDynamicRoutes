(function () {
	var mainApp = angular.module("mainApp", ["ui.router"]);

	mainApp.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
            	$urlRouterProvider.otherwise("/home");

            	$stateProvider
                    .state("home", { url: "/home", templateUrl: "/templates/home.html" })
                        .state("overview", { parent: "home", url: "/overview", templateUrl: "/templates/overview.html" })
							.state("details", { parent: "overview", url: "/details", templateUrl: "/templates/details.html" })
        }
	]
    );


})();

//resolve: {

//	FastestAnimalService: "FastestAnimalService",

//	fastestAnimals: function (FastestAnimalService) {
//		return FastestAnimalService.getAnimals().$promise;
//	}
//}