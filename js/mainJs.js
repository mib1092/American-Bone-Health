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
    function contentMinHeight(){
        var sidebar = $('#sidebar');
        $(sidebar).parent().css({'min-height': sidebar.height()});
    }
    $(window).on('load resize', function() {
        if (document.body.clientWidth > '860') {
            contentMinHeight();
            setTimeout(contentMinHeight, 2000);
            setTimeout(contentMinHeight, 4000);
        }
    });


    $("#es_txt_email").attr("placeholder", "Email");


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

    // for Tabs
    //$(window).on('load resize', function() {
    //    if (document.body.clientWidth <= '640') {
    //        //for mini tabs
    //        $('.box-tabs-list > li').each(function(index){
    //            var face = $(this).eq(index);
    //            face.find('.box').attr('style', '');
    //        });
    //
    //        $('.box-tabs-list').delegate('li:not(.current)', 'click', function() {
    //            $(this).addClass('current').siblings().removeClass('current')
    //                .parent().find('.box').hide().eq($(this).index()).fadeIn(150);
    //        });
    //    } if (document.body.clientWidth <= '1024'){
    //        $('.tabs').delegate('li:not(.current)', 'click', function() {
    //            $(this).addClass('current').siblings('li').removeClass('current')
    //                .parents('.select-volonteer-tabs').find('.box').hide().eq($(this).index()).fadeIn(150);
    //        });
    //    } else {
    //        $('.sub-box-tabs-list > li').each(function(index){
    //            var face = $(this).eq(index);
    //            face.find('.sub-box').attr('style', '');
    //        });
    //        $('.tabs').delegate('li:not(.current)', 'click', function() {
    //            $(this).addClass('current').siblings().removeClass('current')
    //                .parents('.select-volonteer-tabs').find('.box').hide().eq($(this).index()).fadeIn(150);
    //        });
    //    }
    //});

    $(window).on('load resize', function() {
        if (document.body.clientWidth <= '640') {
            $('.sub-box-tabs-list > li').children('.sub-box').attr('style', '');

            var miniTabParent = $('.tabs-mini').parent(),
                miniBox = $('.tabs-mini').next('.box');

            miniTabParent.removeClass('current');
            miniBox.removeClass('visible');

            $('.tabs-mini').on('click', function() {
                var liId = $(this).parent().index();
                if (miniTabParent.eq(liId).hasClass('current')){
                    miniTabParent.eq(liId).toggleClass('current');
                    miniBox.eq(liId).toggleClass('visible');
                } else {
                    miniTabParent.removeClass('current');
                    miniBox.removeClass('visible');
                    miniTabParent.eq(liId).addClass('current');
                    miniBox.eq(liId).addClass('visible');
                }
            });

        } if (document.body.clientWidth <= '1024') {
            $('.sub-box-tabs-list > li').children('.sub-box').attr('style', '');

            var allSubTabs = $('.box-tabs-list').find('.sub-tabs');
            allSubTabs.each(function (index) {
                $('.sub-tabs').eq(index).find('li').removeClass('sub-current');
                $('.sub-tabs').eq(index).find('li').first().addClass('sub-current');
            });
            var allSubBoxes = $('.box-tabs-list').find('.sub-box-tabs-list');
            allSubBoxes.each(function (index) {
                $('.sub-box-tabs-list').eq(index).find('li').children('.sub-box').removeClass('visible');
                $('.sub-box-tabs-list').eq(index).find('li').first().children('.sub-box').addClass('visible');
            });
            var allTabs = $('.select-volonteer-tabs').find('.tabs');
            allTabs.each(function (index) {
                $('.tabs').eq(index).find('li').removeClass('current');
                $('.tabs').eq(index).find('li').first().addClass('current');
            });
            var allBoxes = $('.select-volonteer-tabs').find('.box-tabs-list');
            allBoxes.each(function (index) {
                $('.box-tabs-list').eq(index).find('li').children('.box').removeClass('visible');
                $('.box-tabs-list').eq(index).find('li').first().children('.box').addClass('visible');
            });

            $('.tabs > li').on('click', function() {
                var tabId = $(this).index();

                if ($(this).hasClass('current')){
                } else {
                    $('.tabs > li').removeClass('current');
                    $('.tabs > li').eq(tabId).addClass('current');
                    $('.box-tabs-list > li').children('.box').removeClass('visible');
                    $('.box-tabs-list > li').eq(tabId).children('.box').addClass('visible');
                };
            });
        } else {
            // for Sub tabs
            $('.sub-box-tabs-list > li').children('.sub-box').attr('style', '');

            var allTabs = $('.select-volonteer-tabs').find('.tabs');
            allTabs.each(function (index) {
                $('.tabs').eq(index).find('li').removeClass('current');
                $('.tabs').eq(index).find('li').first().addClass('current');
            });
            var allBoxes = $('.select-volonteer-tabs').find('.box-tabs-list');
            allBoxes.each(function (index) {
                $('.box-tabs-list').eq(index).find('li').children('.box').removeClass('visible');
                $('.box-tabs-list').eq(index).find('li').first().children('.box').addClass('visible');
            });
            // for Tabs
            $('.tabs > li').on('click', function() {
                var tabId = $(this).index();

                if ($(this).hasClass('current')){
                } else {
                    $('.tabs > li').removeClass('current');
                    $('.tabs > li').eq(tabId).addClass('current');
                    $('.box-tabs-list > li').children('.box').removeClass('visible');
                    $('.box-tabs-list > li').eq(tabId).children('.box').addClass('visible');
                };

            });
        };
    });
    // for Sub tabs
    $('ul.sub-tabs').delegate('li:not(.sub-current)', 'click', function() {
        $(this).addClass('sub-current').siblings().removeClass('sub-current')
            .parents('div.select-volunteer-wrap').find('div.sub-box').hide().eq($(this).index()).fadeIn(150);
    });

    // move sing-volonteer btn
    $(window).on('load resize', function() {
        if (document.body.clientWidth > '1024') {
            $('.select-volunteer-left-box input[type=submit], .select-volunteer-left-box button[type=submit]').each(function(index){
                var submit = $(this).eq(index),
                    parentBox = submit.parents('.move-sign-volun');

                submit.appendTo(parentBox);
            });
        } else {
            $('.select-volunteer-wrap + input[type=submit], .select-volunteer-wrap + button[type=submit]').each(function(index){
                var submit = $(this).eq(index),
                    parentBox = submit.parent().find('.select-volunteer-left-box > form');

                submit.appendTo(parentBox);
            });
        }
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