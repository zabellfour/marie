// This is an examples of simple export.
//
// You can remove or add your own function in this file.

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
        });


    }
};


export default common;