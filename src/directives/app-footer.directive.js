/*
 * Directive app-footer
 */
(function() {

    var module = angular.module("app-footer-directive", []);

    module.controller("FooterController", ["$log", "SystemService", 
        function ($log, systemService) {
            $log.debug("FooterController: starting");

            var that = this;
            that.systemService = systemService;

        }
    ]);    

    module.directive("appFooter", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-footer.html", 
                controller: "FooterController", 
                controllerAs: "footerCtrl"
            }
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */