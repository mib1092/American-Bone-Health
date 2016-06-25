$(document).ready(function() {
    //блокировка стандартного поведения ссылок
    function prevent(){
        $('.prevent').on('click', function(event){
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
        $('#search-box').slideToggle(200);
    });

});