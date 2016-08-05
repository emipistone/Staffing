(function() {
    'use strict';

    angular
        .module('app.views.ticket')
        .controller('TicketsController', TicketsController);

    /* @ngInject */
    function TicketsController($scope, $filter, ticketsService, cfpLoadingBar, $mdDialog) {
        var vm = this;

        vm.ticketsData = {
            totalTickets : 266,
            totalInProgress : 55,
            totalInternallyStaffed : 66,
            tickets: []
        };

        vm.query = {
            filter: '', 
            order: 'Number',
            limit: 10,
            page: 1
        };

        vm.filter = {
            value: '',
            options: {
                debounce: 500
            }
        };

        vm.getData = getData;
        vm.removeFilter = removeFilter;
        vm.openTicket = openTicket;

        activate();


        /////////////////////////////////

        function openTicket(ticket, $event) {
            $mdDialog.show({
                controller: 'TicketDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/views/tickets/ticket-dialog.tmpl.html',
                locals: {
                    ticket: ticket
                },
                targetEvent: $event
            });
        }

        function getData() {
            cfpLoadingBar.start();
            ticketsService.getTickets(vm.query, vm.filter.value).then(function(data) {
                vm.ticketsData.tickets = data;
                vm.query.count = data.count;
                cfpLoadingBar.complete();
            });
        }

        function activate() {
            var bookmark;
            $scope.$watch('vm.filter.value', function (newValue, oldValue) {
                if(!oldValue) {
                    bookmark = vm.query.page;
                }
                
                if(newValue !== oldValue) {
                    vm.query.page = 1;
                }
                
                if(!newValue) {
                    vm.query.page = bookmark;
                }
                
                vm.getData();
            });
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }

    }
})();