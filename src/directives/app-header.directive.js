/*
 * Directive app-header
 */
(function() {

    var module = angular.module("app-header-directive", []);
    
    module.controller("HeaderController", ["$log", 
        function($log) {
            $log.debug("HeaderController: starting");
            var that = this;
        }
    ]);

    module.directive("appHeader", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-header.html", 
                controller: "HeaderController", 
                controllerAs: "headerCtrl"
            };
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */