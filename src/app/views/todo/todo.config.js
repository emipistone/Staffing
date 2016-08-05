(function() {
    'use strict';

    angular
        .module('app.views.todo')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/views/todo');

        $stateProvider
        .state('staffingTracker.admin-default.todo', {
            url: '/todo',
            views: {
                '': {
                    templateUrl: 'app/views/todo/todo.tmpl.html',
                    controller: 'TodoController',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/views/todo/fab-button.tmpl.html',
                    controller: 'TodoFabController',
                    controllerAs: 'vm'
                }
            },
            data: {
                layout: {
                    contentClass: 'full-image-background mb-bg-fb-08 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                }
            }
        });

        triMenuProvider.addMenu({
            name: 'MENU.TODO.TITLE',
            icon: 'zmdi zmdi-check',
            state: 'staffingTracker.admin-default.todo',
            type: 'link',
            badge: Math.round(Math.random() * (20 - 1) + 1),
            priority: 6.1
        });
    }
})();