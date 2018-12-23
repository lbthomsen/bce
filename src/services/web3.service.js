/*
 * Web3 Service
 */
/* global web3, ethereum, await */

(function () {

    var module = angular.module("web3-service", []);

    module.factory("Web3Service", ["$log", "$rootScope", "$window", "SystemService",
        function ($log, $rootScope, $window, systemService) {
            $log.debug("Web3Service: starting");

            var me = {
                web3: null, 
                hasLoadEvent: false,
                hasWeb3: false,
                hasMetamask: false,
                hasRightNetwork: false
            };

            $window.addEventListener("load", function () {
                $log.debug("Web3Service: window load event");
                me.hasLoadEvent = true;
                $rootScope.$apply();
            });

            $rootScope.$watch(function () {
                return systemService.name && me.hasLoadEvent;
            }, async function () {
                if (systemService.name && me.hasLoadEvent) {
                    $log.debug("Web3Service: loadEventRecived (%o) and system service (%o) is loaded", me.hasLoadEvent, systemService);

                    // Modern dapp browsers...
                    if ($window.ethereum) {
                        me.web3 = new Web3(ethereum);
                        me.hasWeb3 = true;
                        try {
                            // Request account access if needed
                            await ethereum.enable();
                            
                            if (me.web3.currentProvider.isMetaMask) {
                                me.hasMetamask = true;
                            }
                            
                        } catch (error) {
                            // User denied account access...
                        }
                    }
                    // Legacy dapp browsers...
                    else if ($window.web3) {
                        me.web3 = new Web3(web3.currentProvider);
                        me.hasWeb3 = true;
                    }
                }
            });

            return me;
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */