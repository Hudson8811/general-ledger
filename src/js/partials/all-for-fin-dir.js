$(document).ready(function () {

    if (window.matchMedia('(max-width:  1025px)').matches) {

    } else {
        $('.js-profitb-tabs-wrap').mCustomScrollbar({
            theme: "inset-dark mCS-custom-theme-profitb",
            axis: "Y",
            scrollButtons: {
                enable: false
            }
        });
    }


    $(window).resize(function () {
        if (window.matchMedia('(max-width: 1025px)').matches) {
            if ($('.js-profitb-tabs-wrap.mCustomScrollbar').length > 0) {
                $('.js-profitb-tabs-wrap.mCustomScrollbar').mCustomScrollbar("destroy");
            }
        } else {
            if ($('.js-profitb-tabs-wrap:not(.mCustomScrollbar)').length > 0) {
                $('profitb-tab__inner').attr('style','');
                $('.js-profitb-tabs-wrap:not(.mCustomScrollbar)').mCustomScrollbar({
                    theme: "inset-dark mCS-custom-theme-profitb",
                    axis: "Y",
                    scrollButtons: {
                        enable: false
                    }
                });
            }
        }

    });


    $('.profitb-controller-inner').click(function () {
        var ind = $(this).parent().index();
        $('.profitb-controller').removeClass('profitb-controller--active');
        $(this).parent().addClass('profitb-controller--active');
        $('.profitb-tab').eq(ind).addClass('profitb-tab--active').siblings().removeClass('profitb-tab--active');
    });

    $('.lob-block-mobile-tablet-show-btn').click(function () {
        $(this).parent().addClass('lob-block-wrap--mobtab-visible');
    });




    $('.profitb-tab-non-desktop-head').click(function(){
        $(this).siblings().slideToggle(300);

        $(this).parent().toggleClass('profitb-tab--active');
    });
});