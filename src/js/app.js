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


        // $(window).resize(function() {
        //     var mobileDelta = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) ? 0 : 17;
        //     var w = $(window).width() + mobileDelta;
        //     var h = $(window).height();
        //     var scale;
        //     var hw = $('.wrapper').height();
        //     if (w >= 768 && w < 1920) {
        //         var wspec = 1920;
        //         scale = w / wspec;
        //         // console.log(hw);
        //         //           $('body').height(hw * scale);
        //         isIEorEDGE() ? $(document).scroll(function(e) {
        //             e.preventDefault()
        //             var hw = ($('.footer')[0].offsetTop - $('.footer').height() * 1.65) * scale;
        //             var maxScroll = hw;
        //             if ($(document).scrollTop() > maxScroll) {
        //                 $(document).scrollTop(maxScroll)
        //             }
        //             console.log($(document).scrollTop(), hw);
        //         }) : '';
        //     } else {
        //         scale = 1;
        //         mobileDelta = 0;
        //     }

        //     $(".wrapper").css('transform', 'scale(' + scale + ')').css('margin', -mobileDelta / 2);


        // });

    });

})(jQuery);