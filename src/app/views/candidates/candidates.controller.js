(function () {
    'use strict';

    angular
        .module('app.views.candidate')
        .controller('CandidatesController', CandidatesController);

    /* @ngInject */
    function CandidatesController($scope, $rootScope, $filter, candidatesService, $mdSidenav, cfpLoadingBar) {
        var vm = this;

        vm.candidatesData = {
            totalCandidates: 266,
            totalInProgress: 55,
            totalInternallyStaffed: 66,
            candidates: []
        };
        
        vm.filter = {value: ''};

        vm.query = {
            order: 'Name',
            limit: 10,
            page: 1
        };

        vm.getData = getData;

        activate();

        $rootScope.$on('candidatesRefresh', function () { vm.getData(); });

        function getData() {
            cfpLoadingBar.start();
            candidatesService.getCandidates(vm.query, vm.filter.value).then(function (data) {
                vm.candidatesData.candidates = data;
                vm.query.count = data.count;
                cfpLoadingBar.complete();
            });
        }

        function activate() {
            var bookmark;
            $scope.$watch('vm.filter.value', function (newValue, oldValue) {
                if (!oldValue) {
                    bookmark = vm.query.page;
                }

                if (newValue !== oldValue) {
                    vm.query.page = 1;
                }

                if (!newValue) {
                    vm.query.page = bookmark;
                }

                vm.getData();
            });
        }



    }
})();