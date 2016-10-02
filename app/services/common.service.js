(function () {
    angular.module("app")
        .factory("CommonFactory", CommonFactory);

    CommonFactory.$inject = ["$http", "$q", "$window"];

    function CommonFactory($http, $q, $window) {
        var factory = {};

        return factory;
    }
}());