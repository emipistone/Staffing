(function () {
    'use strict';

    angular
        .module('app.views.email')
        .config(moduleConfig)
        .constant('EMAIL_ROUTES', [{
            state: 'staffingTracker-no-scroll.email.inbox',
            name: 'MENU.EMAIL.INBOX',
            url: '/email/inbox',
            icon: 'zmdi zmdi-inbox'
        }]);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/views/email');

        $stateProvider
            .state('staffingTracker-no-scroll.email.inbox', {
                url: '/email',
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
                        templateUrl: 'app/views/email/toolbar.tmpl.html',
                        controller: 'EmailToolbarController',
                        controllerAs: 'vm'
                    },
                    content: {
                        template: '<div flex ui-view layout="column" class="overflow-hidden"></div>'
                    }
                },
                templateUrl: 'app/views/email/inbox.tmpl.html',
                controller: 'InboxController',
                controllerAs: 'vm',
                resolve: {
                    emails: function ($http, API_CONFIG) {
                        return $http({
                            method: 'GET',
                            url: API_CONFIG.url + 'email/inbox'
                        });
                    },
                    contacts: function ($http, API_CONFIG) {
                        return $http({
                            method: 'GET',
                            url: API_CONFIG.url + 'email/contacts'
                        });
                    }
                }
            });

        /*
                angular.forEach(EMAIL_ROUTES, function(route) {
                    $stateProvider
                    .state(route.state + '.email', {
                        url: '/mail/:emailID',
                        templateUrl: 'app/views/email/email.tmpl.html',
                        controller: 'EmailController',
                        controllerAs: 'vm',
                        resolve: {
                            email: function($stateParams, emails) {
                                emails = emails.data;
                                var foundEmail = false;
                                for(var i = 0; i < emails.length; i++) {
                                    if(emails[i].id === $stateParams.emailID) {
                                        foundEmail = emails[i];
                                        break;
                                    }
                                }
                                return foundEmail;
                            }
                        },
                        onEnter: function($state, email){
                            if (false === email) {
                                $state.go(route.state);
                            }
                        }
                    });
                });
        */
        /*
                var emailMenu = {
                    name: 'MENU.EMAIL.EMAIL',
                    icon: 'zmdi zmdi-email',
                    type: 'link',
                    priority: 2.1,
                    children: []
                };
        
                angular.forEach(EMAIL_ROUTES, function(route) {
                    emailMenu.children.push({
                        name: route.name,
                        state: 'staffingTracker-no-scroll.email',
                        type: 'link',
                        badge: Math.round(Math.random() * (20 - 1) + 1)
                    });
                });
        
                triMenuProvider.addMenu(emailMenu);
        
                triMenuProvider.addMenu({
                    type: 'divider',
                    priority: 5.1
                });
                */

        triMenuProvider.addMenu({
            name: 'MENU.EMAIL.INBOX',
            url: '/email/inbox',
            icon: 'zmdi zmdi-email',
            state: 'staffingTracker-no-scroll.email.inbox',
            type: 'link',
            priority: 5.1
        });
    }
})();