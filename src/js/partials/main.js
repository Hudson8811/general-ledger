$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('.sh-burger').click(function () {
        $(this).toggleClass('sh-burger--active');
        //siteHeader.toggleClass('site-header--mobile-menu-open');
    });

    var $grid1;
    var grid1_isMansory = false;
    var grid1_isMansoryLayoutNow = false;

    if (window.matchMedia('(min-width: 1001px)').matches) {
        $grid1 = $('.hww-block').masonry({

            columnWidth: '.hww-block-item',
            itemSelector: '.hww-block-item',
            gutter: 20,
            horizontalOrder: true
        });
        $grid1.imagesLoaded().progress(function () {
            $grid1.masonry('layout');
        });
        grid1_isMansory = true;
        grid1_isMansoryLayoutNow = true;
    }



    $(window).resize(function () {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            if (grid1_isMansory && grid1_isMansoryLayoutNow === true) {
                $grid1.masonry('destroy')
                grid1_isMansoryLayoutNow = false;
                grid1_isMansory = false;
            }
        }
        else {
            if (grid1_isMansory === false) {
                $grid1 = $('.hww-block').masonry({

                    columnWidth: '.hww-block-item',
                    itemSelector: '.hww-block-item',
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
        prevArrow: '<div class="oc-slick-prev"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L7.68299 2.15238C8.43704 1.49259 9.56296 1.49259 10.317 2.15238L17 8" stroke="#555665" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="oc-slick-next"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L10.317 6.84762C9.56296 7.50741 8.43704 7.50741 7.68299 6.84762L1 0.999999" stroke="#A0A0B1" stroke-width="2"/></svg></div>'
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
                $('.hww-block-item').eq(index).addClass('hww-block-item--active').addClass('hww-block-item--active-visible');
            }, 200);
        }
    });

    /////////////////////////////////

    var wcuAndSpBlockState = 'default';//default/scrollbar/slider

    function wcuAndSpInitScrollbar(params) {
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
    if (window.matchMedia('(max-width: 1000px)').matches) {
        wcuAndSpInitScrollbar();
    }

    $(window).resize(function () {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            if (wcuAndSpBlockState === 'default') {
                wcuAndSpInitScrollbar();
            }
        }
        else {
            $('.wcu-block-wrap').mCustomScrollbar("destroy");
            $('.sp-block-wrap').mCustomScrollbar("destroy");
            wcuAndSpBlockState = 'default';
        }
    });
});
