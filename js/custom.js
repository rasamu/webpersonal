/*Smooth Scroll To Anchor*/
$(function(){
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top - 50;
                 $('html,body').animate({scrollTop: targetOffset}, 800);
                 return false;
            }
        }
    });
});

/*Animation on scroll with wow.js*/
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true
});
wow.init();

/*Auto Close Responsive Navbar on Click*/
function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();
$(window).resize(close_toggle);

/*niceScroll*/
$(document).ready(function() {
    $("html").niceScroll({
        scrollspeed: 50,
        mousescrollstep: 38,
        cursorwidth: 7,
        cursorborder: 0,
        cursorcolor: '#009ea8',
        autohidemode: false,
        zindex: 9999999,
        horizrailenabled: false,
        cursorborderradius: 0
    });
});

/*Sticky Navbar*/
$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
});

/*Back to top*/
$(document).ready(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

/*Stellar - Parallax scrolling*/
$(document).ready(function(){
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
});
