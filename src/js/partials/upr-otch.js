$('.rs-ssb-main').slick({
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: false,
	arrows: true,
	prevArrow: '<div class="slider-white-prev"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#F5F6FB"/><path d="M16 8L10 15L16 22" stroke="#555665" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="slider-white-next"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" transform="rotate(-180 14.5 14.5)" fill="#F5F6FB"/><path d="M13 21L19 14L13 7" stroke="#555665" stroke-width="2"/></svg></div>',
	mobileFirst: true,
	draggable: true,
	responsive: [{
		breakpoint: 1026,
		settings: {
			draggable: false
		}
	}]

});
$('.js-pause-video-on-slide').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$(this).find('video').each(function () {

		if (!this.paused) {
			this.pause();
		}
	});
});

function initUprotchRsTripleSlider() {
	$('.js-rs-triple-ptd--uprotch').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-white-prev"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#F5F6FB"/><path d="M16 8L10 15L16 22" stroke="#555665" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="slider-white-next"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" transform="rotate(-180 14.5 14.5)" fill="#F5F6FB"/><path d="M13 21L19 14L13 7" stroke="#555665" stroke-width="2"/></svg></div>',

		responsive: [{
			breakpoint: 1025,
			settings: {}
		}]
	});
}

function initWWSYuprotchSlider() {
	$('.js-wwsy-uprotch--tablet-mobile').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',

		responsive: [{
			breakpoint: 1025,
			settings: {}
		}]
	});
}

$(document).ready(function () {
	if (window.matchMedia('(max-width: 1025px)').matches) {
		initUprotchRsTripleSlider();
		initWWSYuprotchSlider();
	}


	$(window).resize(function () {
		if (window.matchMedia('(max-width: 1025px)').matches) {
			if (!$('.js-rs-triple-ptd--uprotch').hasClass('slick-initialized')) {
				initUprotchRsTripleSlider();
			} else {
				$('.js-rs-triple-ptd--uprotch').slick('setPosition');
			}
			if (!$('.js-wwsy-uprotch--tablet-mobile').hasClass('slick-initialized')) {
				initWWSYuprotchSlider();
			} else {
				$('.js-wwsy-uprotch--tablet-mobile').slick('setPosition');
			}
		} else {
			if ($('.js-rs-triple-ptd--uprotch').hasClass('slick-initialized')) {
				$('.js-rs-triple-ptd--uprotch').slick('unslick');
			}
			if ($('.js-wwsy-uprotch--tablet-mobile').hasClass('slick-initialized')) {
				$('.js-wwsy-uprotch--tablet-mobile').slick('unslick');
			}
		}
	});



	$('.js-mobile-unwrap-rs-block-row-uprotch span').click(function () {
		$(this).closest('.rs-block-row-mobile-hidden').removeClass('rs-block-row-mobile-hidden');
		var par = $(this).parent();
		setTimeout(function () {
			par.addClass('mobile-unwrap--dn');
		}, 200);
	});


	$('.js-cf-slick-1').slick({
		arrows: false,
		infinite: false,
		dots: true,
		appendDots: $('#cf-slick-1-dots'),
		autoplay: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				arrows: true,
				prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				appendArrows: $('.component-fancy.component-fancy--uprotch-1.component-fancy--with-slider')
			}
		}]
	});

	$(".js-cf-slick-afancy").fancybox({
		animationEffect: false,
		wheel: false,
		afterShow: function (instance, current) {
			if (window.matchMedia("(min-width: 1300px)").matches) {
				instance.scaleToActual(0, 0);
			}
		},
		backFocus: false,
		afterClose: function () {
			setTimeout(function () {
				$('.js-cf-slick-1').slick('refresh');
			}, 10);
		}
	});
});