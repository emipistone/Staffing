(function() {
    'use strict';

    angular
        .module('staffingTracker')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('staffingTracker', {
            abstract: true,
            templateUrl: 'app/staffingTracker/layouts/default/default.tmpl.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layoutController'
        })
        .state('staffingTracker-no-scroll', {
            abstract: true,
            templateUrl: 'app/staffingTracker/layouts/default/default-no-scroll.tmpl.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layoutController'
        })
        .state('staffingTracker.admin-default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/staffingTracker/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                sidebarRight: {
                    templateUrl: 'app/staffingTracker/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/staffingTracker/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
        .state('staffingTracker.admin-default-no-scroll', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/staffingTracker/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                sidebarRight: {
                    templateUrl: 'app/staffingTracker/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/staffingTracker/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div flex ui-view layout="column" class="overflow-hidden"></div>'
                }
            }
        });
    }
})();