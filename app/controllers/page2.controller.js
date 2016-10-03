(function () {
    angular.module("app")
        .controller("Page2Controller", Page2Controller);

    Page2Controller.$inject = ["$scope", "CommonService"];

    function Page2Controller($scope, CommonService) {
        $scope.commonService = CommonService;
    }
}());