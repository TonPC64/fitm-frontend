//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//         $(".navbar-right").addClass("navbar-nav-collapse");
//         $(".page-scroll").addClass("black");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//         $(".navbar-right").removeClass("navbar-nav-collapse");
//         $(".page-scroll").removeClass("black");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});
