(function () {
    angular.module("app")
        .directive('phoneFormatter', function () {
            function convertToPhone(x) {
                if(!x){
                    return "";
                }

                var number = x.replace(/[^\d]/g, '');
                if (number.length > 3 && number.length < 7) {
                    number = number.replace(/(\d{3})(\d{4})?/, "($1) $2");
                } else if (number.length >=7) {
                    number = number.replace(/(\d{3})(\d{3})(\d{4})?/, "($1) $2-$3");
                }
                return number;
            }

            return {
                require: '?ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    if (!ctrl)
                        return;

                    ctrl.$formatters.unshift(function (a) {
                        return convertToPhone(ctrl.$modelValue)
                    });

                    ctrl.$parsers.unshift(function (viewValue) {
                        if (viewValue) {
                            var plainNumber = viewValue.replace(/[^\d]/g, '');
                            elem.val(convertToPhone(plainNumber));
                            return plainNumber;
                        }
                        return '';
                    });
                }
            };
        });
}());