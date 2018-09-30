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
        common.filterScroll();

        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        if (isIE11) return $('body').addClass('ie');
        $(window).on('load', function() {

            let productsWrapper = $('.products-wrapper');

            if (!$(productsWrapper).length) {
                return;
            }

            setLabelHeight();

            let resizeId;
            $(window).on('resize', function() {
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 500);

            });

            function doneResizing() {
                setLabelHeight();
            }

            function setLabelHeight() {
                productsWrapper.each(function() {

                    let height = $(this).find('.products-row__item:first-child').outerHeight(),
                        el = $(this).find('.products-category-label');

                    el.outerHeight(height);
                });
            }

        });




        
    });

})(jQuery);