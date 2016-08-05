(function () {
    'use strict';

    angular
        .module('app.views.dashboards')
        .directive('search', search);

    /* @ngInject */
    function search() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'app/views/common/directives/search.directive.tmpl.html',
            restrict: 'E',
            controllerAs: 'searchController',
            controller: Controller,
            scope: {
                title: "@title",
                filter: "=filter",
            }
        };
        return directive;
    }

    /* @ngInject */
    function Controller($scope) {

        $scope.filter = {
            value: "",
            show: false,
            options: {
                debounce: 500
            }
        };

        $scope.removeFilter = removeFilter;


        function removeFilter() {
            $scope.filter.show = false;
            $scope.filter.value = '';

            if ($scope.filter.form.$dirty) {
                $scope.filter.form.$setPristine();
            }
        }

    };
}
)();