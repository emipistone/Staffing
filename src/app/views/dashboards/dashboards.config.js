(function() {
    'use strict';

    angular
        .module('app.views.dashboards')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/views/dashboards');

        $stateProvider
        .state('staffingTracker.tickets-layout', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/staffingTracker/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
        .state('staffingTracker.admin-default.dashboard-analytics', {
            url: '/dashboards/analytics',
            templateUrl: 'app/views/dashboards/analytics/dashboard-analytics.tmpl.html',
            controller: 'DashboardAnalyticsController',
            controllerAs: 'vm'
        });
        
        triMenuProvider.addMenu({
            priority: 1.1,
            name: 'MENU.DASHBOARDS.DASHBOARDS',
            icon: 'zmdi zmdi-home',
            type: 'link',
            state: 'staffingTracker.admin-default.dashboard-analytics'
        });

    }
})();