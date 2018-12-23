/*
 * Home Route
 */
(function () {

    var module = angular.module("home-route", []);
    
    module.controller("HomeController", ["$log", "SystemService", 
        function($log, systemService) {
            $log.debug("HomeController: starting");
            
            var that = this;
            that.systemService = systemService;
        }
    ]);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html", 
                    controller: "HomeController", 
                    controllerAs: "homeCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */