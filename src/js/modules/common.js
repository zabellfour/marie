var common = {
    mobileManu: function() {
        const $opener = $('.menu-opener');
        const $body = $('body');
        $opener.on('click', () => {
            $body.toggleClass('menu-opened');
        });
    },
    heroSlider: function() {
        const slider = $('.hero-slider');
        slider.owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            animateOut: 'fadeOut',
            dots: true,
            mouseDrag: false,
            touchDrag: false,
            autoplayTimeout: 7000,
            responsiveRefreshRate: 1
        });
    },
    accordion: function() {
        let $tab = $('.tab-pane');
        $tab.on('click', function() {
            $(this).toggleClass('open');
        });
    },
    animation: function() {

        var wow = new WOW({
            boxClass: 'wow',
            offset: 0,
            mobile: true,
            live: true,
            callback: function(box) {


            },
            scrollContainer: null
        });

        var wowSwing = new WOW({
            boxClass: 'wowSwing',
            offset: 120,
            mobile: true,
            live: true,
            scrollContainer: null
        });

        wow.init();
        wowSwing.init();

    },

    masonry: function() {
        var $grid = $('.masonry-grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            horizontalOrder: true,
            percentPosition: true,
            gutter: 20
        });

        // $grid.masonry();
        $grid.imagesLoaded().progress( function() {
          $grid.masonry();
        });

    }

};


export default common;