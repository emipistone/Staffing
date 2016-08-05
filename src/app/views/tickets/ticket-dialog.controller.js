(function() {
    'use strict';

    angular
        .module('app.views.ticket')
        .controller('TicketDialogController', TicketDialogController);

    /* @ngInject */
    function TicketDialogController($window, $mdDialog, ticket) {
        var vm = this;
        vm.cancelClick = cancelClick;
        vm.okClick = okClick;
        vm.ticket = ticket;
        vm.printClick = printClick;


        ////////////////

        function okClick() {
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function printClick() {
            $window.print();
        }

    }
})();