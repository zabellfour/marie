// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import common from './modules/common';
import { wrap } from 'module';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        common.mobileManu();
        common.heroSlider();
        common.accordion();
        common.animation();
        common.masonry();
        $(document).ready(function() {
            $(window).resize();
        });
        // $('body').matchHeight({
        //     target: $('.wrapper'),
        //     property: 'min-height',
        // });
        // $(window).load(function() {
        //     common.masonry();
        // });

        $(window).resize(function() {
            var mobileDelta = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) ? 0 : 17;
            var w = $(window).width() + mobileDelta;
            var h = $(window).height();
            var scale;
            var hw = $('.wrapper').height();
            if (w >= 768 && w < 1920) {
                var wspec = 1920;
                scale = w / wspec;
                console.log(hw)
     //           $('body').height(hw * scale);
                
            } else {
                scale = 1;
                mobileDelta = 0;
            }
            $(".wrapper").css('transform', 'scale(' + scale + ')').css('margin', -mobileDelta / 2);


        });

    });

})(jQuery);