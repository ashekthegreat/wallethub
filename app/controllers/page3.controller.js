(function () {
    angular.module("app")
        .controller("Page3Controller", Page3Controller);

    Page3Controller.$inject = ["$scope", "CommonService"];

    function Page3Controller($scope, CommonService) {
        $scope.commonService = CommonService;
    }
}());