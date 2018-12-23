/*
 * Directive app-main
 */
(function() {

    var module = angular.module("app-main-directive", []);
    
    module.controller("AppMainController", ["$log", "MessageService", 
        function($log, messageService) {
            $log.debug("AppMainController: starting");
        }
    ]);

    module.directive("appMain", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-main.html", 
                controller: "AppMainController", 
                controllerAs: "appMainCtrl"
            };
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */