/*
 * Directive app-sidebar
 */
(function() {

    var module = angular.module("app-sidebar-directive", []);
    
    module.controller("SidebarController", ["$log", "AuthService", 
        function($log, authService) {
            $log.debug("SidebarController: starting");
            
            var that = this;
            that.authService = authService;
        }
    ]);

    module.directive("appSidebar", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-sidebar.html", 
                controller: "SidebarController", 
                controllerAs: "sidebarCtrl"
            };
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */