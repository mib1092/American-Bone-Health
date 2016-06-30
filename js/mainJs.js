$(document).ready(function() {

    // scroll navigation fixed
    if (document.body.clientWidth > '991') {
        $(window).scroll(function(){
            $('.header').toggleClass('scroll-js', $(this).scrollTop() > 0);
        });
    }

    // for burger menu
    $(".mobile-menu-toggle, .mobile-menu-overlay, .donate-mobile .donate").on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $('body').toggleClass('overflow');
    });
    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });
    $(window).on('load', function(){
        $(".mobile-menu a + .sub-menu").siblings('a').toggleClass('expanded');
    });

    // for header search toggle
    $(".search-btn, .close-search").on('click', function(){
        $('#search-box').slideToggle(300);
    });

    // the blocking of links default behavior
    function prevent(){
        $('.prevent, .mobile-menu .expanded, a[href="#"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

    // for "Faces of Osteoporosis" Section on devices
    if (document.body.clientWidth <= '991') {
        $('.faces-wrap').on("click", function() {
            location.href = $(this).attr('data-href');
        });

        if (document.body.clientWidth <= '768') {
            $(window).on('load resize', function() {
                $('.faces-list li:not(.small-faces)').each(function(index){
                    var face = $('.faces-list li:not(.small-faces)').eq(index);
                    face.css({'height': face.width()});
                });
            });
        }
    }

    // for FAQ accordion
    $(".accordion-list > li").on('click', function(){
        $(this).toggleClass('active').find('.accordion-box-content').slideToggle(500);
    });

    // for Owl Carousel sliders
    $('.volunteers-slider').owlCarousel({
        items:1,
        stagePadding: 300,
        loop:true,
        margin:120,
        dots:false,
        nav:true,
        navSpeed:800,
        responsive:{
            1000:{
                stagePadding: 150
            },
            1280:{
                stagePadding: 300,
                margin:100
            },
            1600:{
                stagePadding: 400,
                margin:120
            }
        }
    });

});