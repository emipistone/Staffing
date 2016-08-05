(function() {
    'use strict';

    angular
        .module('app.views.dashboards')
        .service('queryable', queryable);

    /* @ngInject */
    function queryable($odata) {
        ////////////////
        this.getParams = getParams;
        this.like = like;

        function getParams(filter) {
            var params = {};

            params.skip     = (filter.page-1) * filter.limit;
            params.take     = filter.limit;
            params.order    = filter.order.substr(0, 1) =='-'?filter.order.substr(1):filter.order; 
            params.by       = filter.order.substr(0, 1) =='-'?'asc':'desc';

            return params;
        }

        function like(value, property) {
            return new $odata.Func('substringof',
                            new $odata.Value(value),
                            new $odata.Property(property));
        }
    }
})();