

function initWWSYuprotchV2Slider() {
	$('.js-wwsy-uprotch-v2').slick({
		arrows: true,
		rows: 2,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',

		responsive: [
			{
				breakpoint: 700,
				settings: {

					rows: 3,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}


$(document).ready(function () {
	if (window.matchMedia('(max-width: 1025px)').matches) {
		initWWSYuprotchV2Slider();
	}
    $(".js-wwsy-uprotch-v2").on('afterChange', function (event, slick, currentSlide) {
        $(".js-wwsy-uoptish-mobile-counter__current").text(currentSlide + 1);
    });

	$(window).resize(function () {
		if (window.matchMedia('(max-width: 1025px)').matches) {
			if (!$('.js-wwsy-uprotch-v2').hasClass('slick-initialized')) {
				initWWSYuprotchV2Slider();
			}
			else {
				$('.js-wwsy-uprotch-v2').slick('setPosition');
			}

		}
		else {
			if ($('.js-wwsy-uprotch-v2').hasClass('slick-initialized')) {
				$('.js-wwsy-uprotch-v2').slick('unslick');
			}
		}
	});
});
