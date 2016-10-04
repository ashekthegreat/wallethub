(function () {
    angular.module("app")
        .config(['$provide', function ($provide) {
            $provide.factory("CommonService", CommonService);
        }]);

    CommonService.$inject = ["$http", "$q", "$window"];

    function CommonService($http, $q, $window) {
        var service = {};

        service.sharedValue;

        return service;
    }
}());