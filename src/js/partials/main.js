$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    var $grid1 = $('.hww-block').masonry({

        columnWidth: '.hww-block-item',
        itemSelector: '.hww-block-item',
        gutter: 20
    });
    $grid1.imagesLoaded().progress(function () {
        $grid1.masonry('layout');
    });
});
