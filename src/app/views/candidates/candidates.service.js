(function() {
    'use strict';

    angular
        .module('app.views.candidate')
        .service('candidatesService', CandidatesService);

    /* @ngInject */
    function CandidatesService($http, $odata, $odataresource, queryable, API_CONFIG) {
        //var api = 'http://localhost:64158/api/',
        var api = API_CONFIG.apiServiceBaseUri,
            apiCandidate = api + 'candidate';

        var oresource = $odataresource(apiCandidate);
            
        this.getCandidates = getCandidates;
        this.save = save;

        ////////////////

        function getCandidates(query, value) {
            var params = queryable.getParams(query);
            var criteria1 = queryable.like(value,'Position/Name');
            var criteria2 = queryable.like(value,'Name');

            var combination = $odata.Predicate.or([criteria1,criteria2]);

            return oresource.odata().withInlineCount()
                                .skip(params.skip)
                                .take(params.take)
                                .orderBy(params.order,params.by)
                                .filter(combination)
                                .query().$promise;
        }

        function save(item) {
            return $http({  
                url: apiCandidate + '/' + '?value=' + encodeURIComponent(JSON.stringify(item)),
                method: 'POST'
            });
        }
    }
})();