(function() {
    'use strict';

    angular
        .module('staffingTracker.components')
        .controller('FabButtonController', FabButtonController);

    /* @ngInject */
    function FabButtonController($rootScope) {
        var vm = this;
        vm.click = click;

        ////////////////

        function click($event) {
            $rootScope.$emit('fabButtonClick', $event);
        }
       
    }
})();