$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navbarHeight = 44; 
        ($(window).scrollTop() > navbarHeight) ? $('.navbar-scroll').removeClass('navbar-transparent').addClass('navbar-default'): $('.navbar-scroll').removeClass('navbar-default').addClass('navbar-transparent');
    });
});