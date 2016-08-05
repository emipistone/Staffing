(function() {
    'use strict';

    angular
        .module('app')
        .config(themesConfig);

    /* @ngInject */
    function themesConfig ($mdThemingProvider, triThemingProvider, triSkinsProvider) {
        /**
         *  PALETTES
         */
        $mdThemingProvider.definePalette('globant-green-dark', {
            '50': '00796B',
            '100': '00796B',
            '200': '00796B',
            '300': '00796B',
            '400': '00796B',
            '500': '00796B',
            '600': '00796B',
            '700': '00796B',
            '800': '00796B',
            '900': '00796B',
            'A100': '00796B',
            'A200': '00796B',
            'A400': '00796B',
            'A700': '00796B',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.definePalette('globant-green-light', {
            '50': 'C0CC4A',
            '100': 'C0CC4A',
            '200': 'C0CC4A',
            '300': 'C0CC4A',
            '400': 'C0CC4A',
            '500': 'C0CC4A',
            '600': 'C0CC4A',
            '700': 'C0CC4A',
            '800': 'C0CC4A',
            '900': 'C0CC4A',
            'A100': 'C0CC4A',
            'A200': 'C0CC4A',
            'A400': 'C0CC4A',
            'A700': 'C0CC4A',
            'contrastDefaultColor': 'light'
        });

        var triCyanMap = $mdThemingProvider.extendPalette('green', {
            'contrastDefaultColor': 'light',
            'contrastLightColors': '500 700 800 900',
            'contrastStrongLightColors': '500 700 800 900'
        });

        // Register the new color palette map with the name triCyan
        $mdThemingProvider.definePalette('triCyan', triCyanMap);

        /**
         *  SKINS
         */

        // CYAN CLOUD SKIN
        triThemingProvider.theme('globant')
        .primaryPalette('globant-green-light')
        .accentPalette('purple')
        .warnPalette('deep-orange');

        triThemingProvider.theme('white-light-green')
        .primaryPalette('globant-green-dark')
        .accentPalette('light-green', {
            'default': '400'
        })
        .warnPalette('deep-orange');

        triSkinsProvider.skin('cyan-cloud', 'Cyan Cloud')
        .sidebarTheme('globant')
        .toolbarTheme('white-light-green')
        .logoTheme('white-light-green')
        .contentTheme('globant');

        /**
         *  FOR DEMO PURPOSES ALLOW SKIN TO BE SAVED IN A COOKIE
         *  This overrides any skin set in a call to triSkinsProvider.setSkin if there is a cookie
         *  REMOVE LINE BELOW FOR PRODUCTION SITE
         */
        triSkinsProvider.useSkinCookie(false);

        /**
         *  SET DEFAULT SKIN
         */
        triSkinsProvider.setSkin('cyan-cloud');
    }
})();