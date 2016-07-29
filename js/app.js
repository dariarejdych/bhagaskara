$(document).on('ready', function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.next_picture',
        prevArrow: '.prev_picture'
    });

});
