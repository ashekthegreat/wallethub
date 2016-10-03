(function () {
    angular.module("app")
        .directive('currencyFormatter', function () {
            function convertToCurrency(x) {
                if(!x){
                    return "";
                }
                var parts = x.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var ret = parts.join(".");
                return ret ? "$" + ret : "";
            }

            return {
                require: '?ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    if (!ctrl)
                        return;

                    ctrl.$formatters.unshift(function (a) {
                        return convertToCurrency(ctrl.$modelValue)
                    });

                    ctrl.$parsers.unshift(function (viewValue) {
                        if (viewValue) {
                            var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                            elem.val(convertToCurrency(plainNumber));
                            return plainNumber;
                        }
                        return '';
                    });
                }
            };
        });
}());