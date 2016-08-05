(function() {
    'use strict';

    angular
        .module('staffingTracker.components')
        .directive('triMenu', triMenuDirective);

    /* @ngInject */
    function triMenuDirective($location, $mdTheming, triTheming) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            template: '<md-content><tri-menu-item ng-repeat="item in triMenuController.menu | orderBy:\'priority\'" item="::item"></tri-menu-item></md-content>',
            scope: {},
            controller: triMenuController,
            controllerAs: 'triMenuController',
            link: link
        };
        return directive;

        function link($scope, $element) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line
            var mnuColorDefault = 'rgb(57, 73, 171)';
            
                var menuColor = triTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
            if(angular.isDefined(menuColor)) {
                var menuColorRGBA = triTheming.rgba(menuColor.value);
                $element.css({ 'background-color': menuColorRGBA });
                $element.children('md-content').css({ 'background-color': menuColorRGBA });
            }
            else{
                $element.css({ 'background-color': mnuColorDefault });
                $element.children('md-content').css({ 'background-color': mnuColorDefault });
            }
        }
    }

    /* @ngInject */
    function triMenuController(triMenu) {
        var triMenuController = this;
        // get the menu and order it
        triMenuController.menu = triMenu.menu;
    }
})();
