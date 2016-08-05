(function() {
    'use strict';

    angular
        .module('staffingTracker.components')
        .controller('FooterController', FooterController);

    /* @ngInject */
    function FooterController(triSettings, triLayout) {
        var vm = this;
        vm.name = triSettings.name;
        vm.copyright = triSettings.copyright;
        vm.layout = triLayout.layout;
        vm.version = triSettings.version;
    }
})();