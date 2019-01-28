import { callMe } from './custom';


$(function(){
    // callMe();

    navbarCheck();

    $(window).on("scroll", function(){
        navbarCheck()
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