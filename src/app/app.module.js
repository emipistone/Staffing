(function() {
    'use strict';

    angular
        .module('app', [
            'staffingTracker',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'ui.router', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload',
            'angular-loading-bar','ODataResources',
            // 'seed-module'
            // uncomment above to activate the example seed module
            'app.views'
        ])
        // create a constant for languages so they can be added to both staffingTracker & translate
        .constant('APP_LANGUAGES', [{
            name: 'LANGUAGES.ENGLISH',
            key: 'en'
        },{
            name: 'LANGUAGES.SPANISH',
            key: 'es'
        }])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/',
            'apiServiceBaseUri': 'http://staffingtrackerapi.azurewebsites.net/api/'
            //'apiServiceBaseUri': 'http://localhost:64158/api/'
        });
})();