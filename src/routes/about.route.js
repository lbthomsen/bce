/*
 * About Route
 */
(function () {

    var module = angular.module("about-route", []);

    module.controller("AboutController", ["$log", "SystemService",
        function ($log, systemService) {
            $log.debug("AboutController: starting");

            var that = this;
            that.systemService = systemService;

        }
    ]);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/about", {
                    templateUrl: "views/about.html",
                    controller: "AboutController",
                    controllerAs: "aboutCtrl"
                });
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */