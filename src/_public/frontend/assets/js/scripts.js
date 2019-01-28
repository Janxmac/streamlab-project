import { callMe } from './custom';


$(function(){
    // callMe();

    navbarCheck();

    $(window).on("scroll", function(){
        navbarCheck()
    });

    //menu
    var navbar = $('.navbar');
    $(".nav-toggle").off('click').on('click', function(){
        $(".ninja-btn").toggleClass("active");

        if (navbar.hasClass("nav--open")) {
            navbar.removeClass('nav--open').off('touchmove.navbar');
            $('body').removeClass('overflow');
        } else {
            navbar.addClass('nav--open').on('touchmove.navbar', function(e){
                e.preventDefault();
            });
            $('body').addClass('overflow');
        }
    });

});

function navbarCheck() {
    var scrollTop = window.pageYOffset;
    var navbar = $(".navbar");
    var navbarToggle = $(".nav-toggle.toggle-fixed");

    if (scrollTop > 50) {
        navbar.addClass("navbar--condensed");
        navbarToggle.addClass('toggle--show');
    } else {
        navbar.removeClass("navbar--condensed");
        navbarToggle.removeClass('toggle--show');
    }
}