/*var mediaTablet= 1025;
var mediaMoreTablet= 1026;
var mediaMob= 700;
var mediaMoreMob= 701;*/

$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('.js-table-fancybox').fancybox({
        'animationEffect': false,
        'wheel': false,
        afterShow: function (instance, current) {

            if (window.matchMedia('(min-width: 1300px)').matches) {
                instance.scaleToActual(0, 0);
            }
        }
    });

    var $grid1;
    var grid1_isMansory = false;
    var grid1_isMansoryLayoutNow = false;

    if (window.matchMedia('(min-width: 1026px)').matches) {
        if (!$('.hww-block').hasClass('js-hww-block--not-mansory')) {
            $grid1 = $('.hww-block').masonry({
                columnWidth: '.hww-block-item',
                gutter: 20,
                horizontalOrder: true
            });
            $grid1.imagesLoaded().progress(function () {
                $grid1.masonry('layout');
            });
            grid1_isMansory = true;
            grid1_isMansoryLayoutNow = true;
        }
    }



    $(window).resize(function () {
        if (window.matchMedia('(max-width: 1025px)').matches) {
            if (grid1_isMansory && grid1_isMansoryLayoutNow === true) {
                $grid1.masonry('destroy')
                grid1_isMansoryLayoutNow = false;
                grid1_isMansory = false;
            }
        }
        else {
            if (!$('.hww-block').hasClass('js-hww-block--not-mansory')) {
                if (grid1_isMansory === false) {
                    $grid1 = $('.hww-block').masonry({

                        columnWidth: '.hww-block-item',
                        gutter: 20,
                        horizontalOrder: true
                    });
                    grid1_isMansory = true;
                    grid1_isMansoryLayoutNow = true;
                }
                if (grid1_isMansoryLayoutNow === false) {
                    $grid1.masonry('layout');
                    grid1_isMansoryLayoutNow = true;
                }
            }
        }

    });



    $('.oc-slider').slick({
        dots: true,
        arrows: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        appendArrows: $('.oc-slider-controls'),
        appendDots: $('.oc-slider-controls'),
        asNavFor: '.modal-fc-slider',
        prevArrow: '<div class="oc-slick-prev"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L7.68299 2.15238C8.43704 1.49259 9.56296 1.49259 10.317 2.15238L17 8" stroke="#555665" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="oc-slick-next"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L10.317 6.84762C9.56296 7.50741 8.43704 7.50741 7.68299 6.84762L1 0.999999" stroke="#A0A0B1" stroke-width="2"/></svg></div>',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });

    $('.modal-fc-slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.oc-slider',
        appendDots: $('.modal-fc-slider-nav__dots'),
        prevArrow: '.modal-fc-slider-nav__prev',
        nextArrow: '.modal-fc-slider-nav__next'

    });

    $('.js-modal-comments-open, #js-modal-comments-open').click(function(){
        $.fancybox.open({
            src  : '#modal-full-comment',
            type : 'inline',
            opts : {
                afterShow : function( instance, current ) {
                   // console.info( 'done!' );
                }
            }
        });
    });

    $('.ans-item-question').click(function () {
        $(this).toggleClass('ans-item-question--opened').siblings('.ans-item-answer').slideToggle(200);
    });

    $('.hww-block-mobile-tab').click(function () {
        if (!$(this).hasClass('hww-block-mobile-tab--active')) {
            $(this).addClass('hww-block-mobile-tab--active').siblings().removeClass('hww-block-mobile-tab--active');
            var index = $(this).index();
            $('.hww-block-item--active').removeClass('hww-block-item--active-visible');
            setTimeout(function () {
                $('.hww-block-item--active').removeClass('hww-block-item--active');
                $('.hww-block-item, .hww-block-item--fw').eq(index).addClass('hww-block-item--active').addClass('hww-block-item--active-visible');
            }, 200);
        }
    });

    /////////////////////////////////

    var wcuAndSpBlockState = 'default';//default/scrollbar/slider

    function wcuAndSpInitScrollbar() {
        $('.wcu-block-wrap').mCustomScrollbar({
            theme: "custom-theme",
            axis: "x",
            scrollButtons: { enable: true }
        });
        $('.sp-block-wrap').mCustomScrollbar({
            theme: "custom-theme mCS-custom-theme-sp",
            axis: "x",
            scrollButtons: { enable: true }
        });

        wcuAndSpBlockState = 'scrollbar';
    }
    function wcuAndSpInitSlider() {
        $('.wcu-block').slick({
            prevArrow: '<div class="wwsy-slick-prev wwsy-slick-prev--wcu"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
            nextArrow: '<div class="wwsy-slick-next wwsy-slick-next--wcu"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>'
        });
        $('.sp-block').slick({
            prevArrow: '<div class="hww-slick-prev hww-slick-prev--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
            nextArrow: '<div class="hww-slick-next hww-slick-next--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>'
        });


        wcuAndSpBlockState = 'slider';
    }
    $(".sp-block").on('afterChange', function (event, slick, currentSlide) {
        $(".js-sp-block-mobile-counter__current").text(currentSlide + 1);
    });
    if (window.matchMedia('(min-width: 701px) and (max-width: 1025px)').matches) {
        wcuAndSpInitScrollbar();
    }
    if (window.matchMedia('(max-width: 700px)').matches) {
        wcuAndSpInitSlider();
    }

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 701px) and (max-width: 1025px)').matches) {
            if (wcuAndSpBlockState === 'default') {
                wcuAndSpInitScrollbar();
            }
            if (wcuAndSpBlockState === 'slider') {
                $('.wcu-block').slick('unslick');
                $('.sp-block').slick('unslick');
                wcuAndSpInitScrollbar();
            }
        }
        else {
            if (window.matchMedia('(max-width: 700px)').matches) {
                if (wcuAndSpBlockState === 'default') {
                    wcuAndSpInitSlider();
                }
                if (wcuAndSpBlockState === 'scrollbar') {
                    $('.wcu-block-wrap').mCustomScrollbar("destroy");
                    $('.sp-block-wrap').mCustomScrollbar("destroy");
                    wcuAndSpInitSlider();
                }
                if (wcuAndSpBlockState === 'slider') {
                    $('.wcu-block').slick('setPosition');
                    $('.sp-block').slick('setPosition');
                }
            }
            else {
                if (wcuAndSpBlockState === 'scrollbar') {
                    $('.wcu-block-wrap').mCustomScrollbar("destroy");
                    $('.sp-block-wrap').mCustomScrollbar("destroy");
                }
                if (wcuAndSpBlockState === 'slider') {
                    $('.wcu-block').slick('unslick');
                    $('.sp-block').slick('unslick');
                }
                wcuAndSpBlockState = 'default';
            }
        }
    });


    /////////////
    ////////////////ФУТЕР

    function adaptFooter() {
        if (window.matchMedia('(max-width: 1025px)').matches) {
            if (!$('.sf-col-3').parent().hasClass('sf-tb-container')) {
                $('.sf-col-3').appendTo($('.sf-tb-container'));
                $('.sf-col-5').appendTo($('.sf-tb-container'));
            }
        }
        else {
            console.log($('.sf-col-3').parent());
            if ($('.sf-col-3').parent().hasClass('sf-tb-container')) {
                $('.sf-col-3').appendTo($('.sf-container.container'));
                $('.sf-col-5').appendTo($('.sf-container.container'));
            }
        }
    }
    adaptFooter();
    $(window).resize(function () {
        adaptFooter();
    });




    if (window.matchMedia('(max-width: 700px)').matches) {
        $('.wwsy-block').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
            nextArrow: '<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>'
        });

        //////////////////////////////

        $('.hww-block').slick({
            prevArrow: '<div class="hww-slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
            nextArrow: '<div class="hww-slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>'
        });
    }

    $(".wwsy-block").on('afterChange', function (event, slick, currentSlide) {
        $(".js-wwsy-block-mobile-counter__current").text(currentSlide + 1);
    });

    $(".wcu-block").on('afterChange', function (event, slick, currentSlide) {
        $(".js-wcu-uprotch-mobile-counter__current").text(currentSlide + 1);
    });

    $('.hww-block-mobile-unwrap span').click(function () {
        $('.hww-block').addClass('hww-block--shown');
        setTimeout(function () {
            $('.hww-block-mobile-unwrap').addClass('hww-block-mobile-unwrap--dn');
        }, 200);
    });

    $(window).resize(function () {
        if (window.matchMedia('(max-width: 700px)').matches) {

            if (!$('.wwsy-block').hasClass('slick-initialized')) {
                $('.wwsy-block').slick({
                    autoplay: true,
                    autoplaySpeed: 2000,
                    prevArrow: '<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
                    nextArrow: '<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>'
                });
            }
            else {
                $('.wwsy-block').slick('setPosition');
            }
            //////////////////////////////

            if (!$('.hww-block').hasClass('slick-initialized')) {
                $('.hww-block').slick({
                    prevArrow: '<div class="hww-slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
                    nextArrow: '<div class="hww-slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>'
                });
            }
            else {
                $('.hww-block').slick('setPosition');
            }
        }

        else {
            if ($('.wwsy-block').hasClass('slick-initialized')) {
                $('.wwsy-block').slick('unslick');
            }

            if ($('.hww-block').hasClass('slick-initialized')) {
                $('.hww-block').slick('unslick');
            }
        }
    });

    /* function wwsyBlock(params) {

         wcuAndSpBlockState = 'scrollbar';
     }*/

    setTimeout(function () {
        $('.slick-initialized').slick('setPosition');
    }, 2000);
});
