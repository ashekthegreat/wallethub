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
        $scope.inputValues = [
            {
                value: 100
            }, {
                value: 100
            }, {
                value: 100
            }
        ];
        var inputValuesCount = $scope.inputValues.length;

        // 2 variables for sum, to compare when changed
        $scope.sumOriginal = 0;
        $scope.sumCurrent = 0;

        // sum all inputs
        $scope.sumInputs = function () {
            $scope.sumCurrent = 0;

            // since array map and reduce is not supported by IE9 or less, lets stick to for loop instead
            for (var i = 0; i < inputValuesCount; i++) {
                $scope.sumCurrent += $scope.inputValues[i].value;
            }
            $scope.sumOriginal = $scope.sumCurrent;
        };
        $scope.sumInputs();

        // distribute the change of sum across 3 inputs
        $scope.distributeSum = function () {
            var newValue = $scope.sumCurrent;
            var oldValue = $scope.sumOriginal;

            if (newValue == oldValue) {
                return;
            }

            var delta = newValue - oldValue;
            var absSum = 0;
            for (var i = 0; i < inputValuesCount; i++) {
                absSum += Math.abs($scope.inputValues[i].value);
            }

            // if all 3 are 0, distribute equally
            if (absSum == 0) {
                for (i = 0; i < inputValuesCount; i++) {
                    $scope.inputValues[i].value += delta / inputValuesCount;
                }
            } else {
                for (i = 0; i < inputValuesCount; i++) {
                    $scope.inputValues[i].value = $scope.inputValues[i].value + (Math.abs($scope.inputValues[i].value) * delta / absSum);
                }
            }

            // save sum to original
            $scope.sumOriginal = $scope.sumCurrent;
        };
    }
}());
