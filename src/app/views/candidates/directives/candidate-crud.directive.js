(function () {
    'use strict';

    angular
        .module('app.views.candidate')
        .directive('candidateCrud', candidateCrud);

    /* @ngInject */
    function candidateCrud() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'app/views/candidates/directives/candidate-crud.tmpl.html',
            restrict: 'E',
            controllerAs: 'candidateCrudController',
            controller: Controller
        };
        return directive;
    }

    /* @ngInject */
    function Controller($scope, $rootScope, $mdSidenav, candidatesService, cfpLoadingBar) {

        $scope.actionCreate = function () {
            $scope.viewMode = 'create';
        };

        //// sideNav

        $scope.close = close();
        $scope.toggleRight = buildToggler('right');
        $scope.actionSave = actionSave();
        $rootScope.$on('fabButtonClick', function () { $scope.toggleRight(); });


        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID).toggle();
                $scope.candidate = {};
            };
        }

        function close() {
            return function () {
                $mdSidenav('right').close().then(function () {
                    $rootScope.$emit('$mdSidenavClose');
                });
            };
        }

        function actionSave () {
            return function (){
                cfpLoadingBar.start();
                candidatesService.save($scope.candidate).then(function () {
                    cfpLoadingBar.complete();
                    $rootScope.$emit('candidatesRefresh');
                    $scope.close();
                });
            };
        }

    }
}
)();