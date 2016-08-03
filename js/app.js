$(document).on('ready', function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.next_picture',
        prevArrow: '.prev_picture'
    });

    $(function() {
        $(".progressbar-1").progressbar({
            value: 90
        });
    });
    $(function() {
        $(".progressbar-2").progressbar({
            value: 70
        });
    });
    $(function() {
        $(".progressbar-3").progressbar({
            value: 75
        });
    });
    $(function() {
        $(".progressbar-4").progressbar({
            value: 80
        });
    });


});
