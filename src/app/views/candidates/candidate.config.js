(function() {
    'use strict';

    angular
        .module('app.views.candidate')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/views/candidates');

        $stateProvider        
        .state('staffingTracker.admin-default.candidates', {
            url: '/candidates',
            views: {
                sidebarLeft: {
                    templateUrl: 'app/staffingTracker/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                '': {
                    templateUrl: 'app/views/candidates/candidates.tmpl.html',
                    controller: 'CandidatesController',
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
            icon: 'zmdi zmdi-accounts-alt',
            name: 'MENU.CANDIDATES',
            state: 'staffingTracker.admin-default.candidates',
            type: 'link',
            priority: 3.1
        });
    }
})();