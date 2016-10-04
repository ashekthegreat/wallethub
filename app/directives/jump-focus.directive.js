(function () {
    angular.module("app")
        .directive('jumpFocus', function () {
            return {
                link: function (scope, elem, attrs) {
                    var $inputs = $(elem).find("input");
                    $inputs.each(function (i, item) {
                        var $item = $(item);
                        // attach jump-next to n-1 items
                        if (i < $inputs.length - 1) {
                            var $nextInput = $($inputs[i + 1]);
                            $item.on("keyup", function () {
                                if ($item.val().length >= 5) {
                                    $item.val($item.val().substring(0, 5));
                                    $nextInput.focus();
                                }
                            })
                        }

                        // attach jump-prev to all items except the first one
                        if (i > 0) {
                            var $prevInput = $($inputs[i - 1]);
                            $item.on("keyup", function (event) {
                                var key = event.keyCode || event.charCode;

                                if ((key == 8 || key == 46) && $item.val().length == 0) {
                                    $prevInput.focus();
                                }
                            })
                        }
                    });
                }
            };
        });
}());