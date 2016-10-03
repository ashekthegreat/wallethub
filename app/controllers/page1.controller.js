(function () {
    angular.module("app")
        .controller("Page1Controller", Page1Controller);

    Page1Controller.$inject = ["$scope", "CommonService"];

    function Page1Controller($scope, CommonService) {
        // Q2: common service
        $scope.commonService = CommonService;

        // Q6: Currency model value
        $scope.currencyAmount;
    }
}());
