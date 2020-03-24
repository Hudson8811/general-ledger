$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    var $grid1 = $('.hww-block').masonry({

        columnWidth: '.hww-block-item',
        itemSelector: '.hww-block-item',
        gutter: 20,
        horizontalOrder: true
    });
    $grid1.imagesLoaded().progress(function () {
        $grid1.masonry('layout');
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
        prevArrow: '<div class="oc-slick-prev"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L10.317 6.84762C9.56296 7.50741 8.43704 7.50741 7.68299 6.84762L1 0.999999" stroke="#A0A0B1" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="oc-slick-next"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L7.68299 2.15238C8.43704 1.49259 9.56296 1.49259 10.317 2.15238L17 8" stroke="#555665" stroke-width="2"/></svg></div>'
    });
});
