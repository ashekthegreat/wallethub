(function () {
    angular.module("app", ['ui.router']);
        
	//$stateprovider is the service provided by ui.router
    angular.module("app")
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            //create route object
            $stateProvider
                .state('page', {
                    url: '/:id',
                    templateUrl: function($stateParams) {
                        console.log($stateParams);
                        return 'app/views/page'+ $stateParams.id +'.html';
                    },
                    controllerProvider: function($stateParams) {
                        return "Page" + $stateParams.id + "Controller";
                    }
                });

            // set the default route
            $urlRouterProvider.otherwise('/1');

        }]);
}());