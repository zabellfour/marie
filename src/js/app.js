// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import common from './modules/common';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        common.mobileManu();
        common.heroSlider();
        common.accordion();
        $(document).ready(function() {
            $(window).resize();
        });

        $(window).resize(function() {
            var mobileDelta = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) ? 0 : 17;
            var w = $(window).width() + mobileDelta;
            var h = $(window).height();
            var scale;
            if (w >= 768 && w < 1920) {
                var wspec = 1966;
                scale = w / wspec;
            } else {
                scale = 1;
            }
            $(".font-resp .wrapper").css('-webkit-transform', 'scale(' + scale + ')');
            $(".font-resp .wrapper").css('-moz-transform', 'scale(' + scale + ')');

        });

    });

})(jQuery);