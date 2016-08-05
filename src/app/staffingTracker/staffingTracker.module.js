(function() {
    'use strict';

    angular
        .module('staffingTracker', [
            'ngMaterial',
            'staffingTracker.layouts', 'staffingTracker.components', 'staffingTracker.themes', 'staffingTracker.directives', 'staffingTracker.router',
            // 'staffingTracker.profiler',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();