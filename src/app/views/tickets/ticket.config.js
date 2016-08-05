(function() {
    'use strict';

    angular
        .module('app.views.ticket')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/views/tickets');

        $stateProvider        
        .state('staffingTracker.admin-default.tickets', {
            url: '/tickets',
            views: {
                sidebarLeft: {
                    templateUrl: 'app/staffingTracker/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                '': {
                    templateUrl: 'app/views/tickets/tickets.tmpl.html',
                    controller: 'TicketsController',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/views/common/fab-button/fab-button.tmpl.html',
                    controller: 'FabButtonController',
                    controllerAs: 'vm'
                }
            }
        });
        

        triMenuProvider.addMenu({
            icon: 'fa fa-ticket',
            name: 'MENU.TICKETS',
            state: 'staffingTracker.admin-default.tickets',
            type: 'link',
            priority: 2.1
        });
    }
})();