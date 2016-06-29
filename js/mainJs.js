$(document).ready(function() {
    //блокировка стандартного поведения ссылок
    function prevent(){
        $('.prevent, a[href="#"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

    // scroll navigation fixed
    $(window).scroll(function(){
        $('.header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    });

    // for burger menu
    $(".btn-toggle").on('click', function(){
        $(this).parent().siblings('.toggle-box').slideToggle();
        $(this).toggleClass('active');
    });

    // for header search toggle
    $(".search-btn, .close-search").on('click', function(){
        $('#search-box').slideToggle(300);
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

    // for FAQ accordion
    $(".accordion-list > li").on('click', function(){
        $(this).toggleClass('active').find('.accordion-box-content').slideToggle(500);
    });
});