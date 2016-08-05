(function() {
    'use strict';

    angular
        .module('app.views.ticket')
        .service('ticketsService', TicketsService);

    /* @ngInject */
    function TicketsService($http, $odata, $odataresource, queryable,API_CONFIG) {
        var api = API_CONFIG.apiServiceBaseUri,
            apiTicket = api + 'ticket';

        var oresource = $odataresource(apiTicket);
            
        this.getTickets = getTickets;

        ////////////////

        function getTickets(query, value) {
            var params = queryable.getParams(query);
            var criteria1 = queryable.like(value,'Client/Name');
            var criteria2 = queryable.like(value,'Name');

            var combination = $odata.Predicate.or([criteria1,criteria2]);

            return oresource.odata().withInlineCount()
                                .skip(params.skip)
                                .take(params.take)
                                .orderBy(params.order,params.by)
                                .filter(combination)
                                .query().$promise;
        }
    }
})();