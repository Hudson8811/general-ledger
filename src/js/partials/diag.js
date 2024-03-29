$(document).ready(function () {
	$(window).resize(function () {
		initSliders();
	});
	initSliders();
});

function initSliders() {
	if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
		if (!$('.js-ncs-slider').hasClass('mCustomScrollbar')) {
			setTimeout(function () {
				$('.js-ncs-slider').mCustomScrollbar({
					axis: 'x',
					scrollButtons: {
						enable: true
					},
					theme: "custom-theme mCS-custom-theme-sp"
				});
			}, 1000);

			$('.js-ncs-slider').mCustomScrollbar("update");
		}
	} else {
		if ($('.js-ncs-slider').hasClass('mCustomScrollbar')) {
			$('.js-ncs-slider').mCustomScrollbar('destroy');
		}
	}

	if (window.matchMedia('(max-width: 767px)').matches) {
		if (!$('.js-wns-slider').hasClass('slick-initialized')) {
			$('.js-wns-slider').slick({
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
			});
		}

			setTimeout(function () {
				if (!$('.js-ncs-slider').hasClass('slick-initialized')) {
					$('.js-ncs-slider').slick({
						arrows: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
						nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
					});
				}
			}, 1000);

		if (!$('.wwss-block').hasClass('slick-initialized')) {
			$('.wwss-block').slick({
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
			});
		}
	} else {
		if($('.js-ncs-slider').hasClass('slick-initialized')){
			$('.js-ncs-slider').slick('unslick');
		}
		if($('.js-wns-slider').hasClass('slick-initialized')){
			$('.js-wns-slider').slick('unslick');
		}
		if($('.wwss-block').hasClass('slick-initialized')){
			$('.wwss-block').slick('unslick');
		}
	}

	if (window.matchMedia('(max-width: 1023px)').matches) {
		if (!$('.js-wms-slider').hasClass('slick-initialized')) {
			$('.js-wms-slider').slick({
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',

				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			});
		}
	} else {
		if($('.js-wms-slider').hasClass('slick-initialized')){
			$('.js-wms-slider').slick('unslick');
		}
	}
}