$(document).ready(function() {

    // scroll navigation fixed
    if (document.body.clientWidth > '974') {
        $(window).scroll(function(){
            $('.header').toggleClass('scroll-js', $(this).scrollTop() > 0);
        });
    }

    // for burger menu
    $(".mobile-menu-toggle, .mobile-menu-overlay, .donate-mobile .donate").on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });
    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });
    $(window).on('load', function(){
        $(".mobile-menu a + .sub-menu").siblings('a').toggleClass('expanded').attr("href", "#");
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
    $(window).on('load resize', function() {
        if (document.body.clientWidth <= '991') {
            $('.faces-wrap').on("click", function() {
                location.href = $(this).attr('data-href');
            });
        }
        if (document.body.clientWidth <= '768') {
            $('.faces-list li:not(.small-faces)').each(function(index){
                var face = $('.faces-list li:not(.small-faces)').eq(index);
                face.css({'height': face.width()});
            });
        } else {
            $('.faces-list li').each(function(index){
                var face = $('.faces-list li').eq(index);
                face.css({'height': 'auto'});
            });
        }
    });

    // for FAQ accordion
    $(".accordion-list > li").on('click', function(){
        $(this).toggleClass('active').find('.accordion-box-content').slideToggle(500);
    });

    // for pages with sidebar
    var sidebar = $('#sidebar');
    $(sidebar).parent().css({'min-height': sidebar.height()});

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
            0:{
                stagePadding: 20,
                margin: 20,
                autoHeight : true
            },
            481:{
                stagePadding: 80,
                margin: 60,
                autoHeight : true
            },
            641:{
                stagePadding: 80,
                margin: 60,
                autoHeight : false
            },
            768:{
                stagePadding: 120,
                margin: 70
            },
            961:{
                stagePadding: 220,
                margin: 80
            },
            1281:{
                stagePadding: 300,
                margin: 100
            },
            1500:{
                stagePadding: 400,
                margin: 120
            },
            1800:{
                stagePadding: 480,
                margin: 150
            }
        }
    });

    // for Search Event
    $('.hide-adv').on('click', function() {
        var hideBlock = $('.event-search-bottom-box');
        $(this).text(hideBlock.is(':visible') ? 'Show Advanced Search' : 'Hide Advanced Search');
        $(this).toggleClass('active').parent().siblings('.event-search-wrap').find(hideBlock).slideToggle(500);
    });

    // for copy post permalink
    $("a.copy-permalink").on('click', function (e) {
        e.preventDefault();
    }).each(function () {
        $(this).zclip({
            path:'/wp-content/themes/americanbonehealth/assets/zclip/ZeroClipboard.swf',
            copy: $(this).attr('href'),
            beforeCopy:function(){},
            afterCopy:function(){
                // alert("Link has been copied to clipboard!");
                swal({ title: "", text: "Link has been copied to clipboard!", type: "success"});
            }
        });
    });
});