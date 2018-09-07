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
        $('.hero-slider').owlCarousel({
            items:1,
            dotsContainer: '.pagination-holder',
            loop:true,

        });
    }
};


export default common;