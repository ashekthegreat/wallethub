(function () {
    angular.module("app")
        .controller("Page1Controller", Page1Controller);

    Page1Controller.$inject = ["$scope", "CommonService"];

    function Page1Controller($scope, CommonService) {
        // Q2: common service
        $scope.commonService = CommonService;

        // Q5: Phone model value
        $scope.phoneNumber;

        // Q6: Currency model value
        $scope.currencyAmount;

        // Q7: input values

        $scope.inputValues = {
            input1: 100,
            input2: 100,
            input3: 100,
            sum: ""
        };
        $scope.sumInputs = function(){
            var inp = $scope.inputValues;
            inp.sum = inp.input1 + inp.input2 + inp.input3;
            console.log(inp.sum);
        };
        $scope.sumInputs();
    }
}());
