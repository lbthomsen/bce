/*                                                                                                                                                                                             
 * System Service                                                                                                                                                                             
 */
(function () {

    var module = angular.module("system-service", []);

    module.factory("SystemResource", ["$log", "$resource",
        function ($log, $resource) {
            return $resource("/api/system");
        }
    ]);

    module.factory("SystemService", ["$log", "$rootScope", "SystemResource", 
        function ($log, $rootScope, systemResource) {
            $log.debug("SystemService: starting");
            
            var me = {};
            
            systemResource.get({}).$promise.then(function(response) {
                $log.debug("SystemService: result = %o", response);
                angular.copy(response.result, me);
            }, function(error) {
                $log.error("SystemService: error = %o", error);
            });

            return me;
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */