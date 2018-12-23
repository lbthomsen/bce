/*
 * Main AngularJS Application
 */
(function () {

    var appName = "faucet";

    var app = angular.module(appName, [
        "ngRoute",
        "ngAnimate",
        "ngResource",
        "ngTouch", 
        "ngFileUpload",
        "ngWebSocket", 
        "angularMoment",
        "angular-loading",
        "angular-head",
        "angular-inview",
        "ui.bootstrap", 
        "LocalStorageModule",
        "system-service",
        "auth-service",
        "email-service",
        "package-service",
        "pin-service",
        "transaction-service",
        "file-service",
        "shout-service", 
        "message-service", 
        "app-header-directive",
        "app-sidebar-directive",
        "app-main-directive",
        "app-footer-directive",
        "ad-directive",
        "inview-img-directive",
        "file-upload-directive",
        "add-pin-directive",
        "pins-directive",
        "pin-directive",
        "transactions-directive", 
        "transaction-directive", 
        "home-route",
        "static-route",
        "about-route",
        "auth-route",
        "contact-route",
        "pins-route",
        "transactions-route"
    ]);

    app.config(["$logProvider", "$locationProvider", "$httpProvider", "HeadServiceProvider",
        function ($logProvider, $locationProvider, $httpProvider, headServiceProvider) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

            $httpProvider.interceptors.push("AuthInterceptor");

            // This is where the HeadService default values are configured!
            headServiceProvider.setTitle("ipfs-pin");
            headServiceProvider.setMetas({
                description: "IPFS Pin Service",
                keywords: "ipfs,pin",
                author: "Lars Boegild Thomsen <lbthomsen@gmail.com>",
                generator: "AngularJS"
            });

            // Fugly debug disable hack
            if (!window.location.port) {
                $logProvider.debugEnabled(false);
            }
        }
    ]);

    // Handle Google analytics - update on route change
    app.run(["$log", "$rootScope", "$location", "$window", "$timeout", "$route",
        function ($log, $rootScope, $location, $window, $timeout, $route) {

            // The standard Google Analytics stuff
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-89965874-12', 'auto');
            ga('require', 'displayfeatures');

            $rootScope.$on("$routeChangeStart", function () {
                $rootScope.$emit("setLoading");
            });

            $rootScope.$on('$routeChangeSuccess', function () {

                $rootScope.$emit("resetLoading");

                // Experimentally delay updating Google until header is updated
                $timeout(function () {
                    $log.debug("Application: updating Google");
                    $window.ga('send', {
                        hitType: 'pageview',
                        page: $location.path()
                    });
                }, 200);
            });
        }
    ]);

    app.filter('bytes', function () {
        return function (bytes, precision) {
            if (isNaN(parseFloat(bytes)) || !isFinite(bytes))
                return '-';
            if (typeof precision === 'undefined')
                precision = 1;
            var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
                    number = Math.floor(Math.log(bytes) / Math.log(1024));
            return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
        };
    });

})();
/*
 * vim: ts=4 et nowrap autoindent
 */
