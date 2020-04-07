$('.rs-ssb-main').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.rs-ssb-thumbs',
	responsive: [
		{
			breakpoint: 700,
			settings: {
			}
		}
	]
});
$(window).resize(function () {
	$('.rs-ssb-main').slick('setPosition');
});
$('.rs-ssb-thumbs').slick({
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slider-white-prev"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#F5F6FB"/><path d="M16 8L10 15L16 22" stroke="#555665" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="slider-white-next"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" transform="rotate(-180 14.5 14.5)" fill="#F5F6FB"/><path d="M13 21L19 14L13 7" stroke="#555665" stroke-width="2"/></svg></div>',
	asNavFor: '.rs-ssb-main',
	focusOnSelect: true,

	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2
			}
		}
	]
});
$(window).resize(function () {
	$('.rs-ssb-thumbs').slick('setPosition');
});


function initUprotchRsTripleSlider() {
	$('.js-rs-triple-ptd--uprotch').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-white-prev"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#F5F6FB"/><path d="M16 8L10 15L16 22" stroke="#555665" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="slider-white-next"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" transform="rotate(-180 14.5 14.5)" fill="#F5F6FB"/><path d="M13 21L19 14L13 7" stroke="#555665" stroke-width="2"/></svg></div>',

		responsive: [
			{
				breakpoint: 1025,
				settings: {
				}
			}
		]
	});
}

$(document).ready(function () {
	if (window.matchMedia('(max-width: 1025px)').matches) {
		initUprotchRsTripleSlider();
	}

	$(window).resize(function () {
		if (window.matchMedia('(max-width: 1025px)').matches) {
			if (!$('.js-rs-triple-ptd--uprotch').hasClass('slick-initialized')) {
				initUprotchRsTripleSlider();
			}
			else {
				$('.js-rs-triple-ptd--uprotch').slick('setPosition');
			}
		}
		else {
			if ($('.js-rs-triple-ptd--uprotch').hasClass('slick-initialized')) {
				$('.js-rs-triple-ptd--uprotch').slick('unslick');
			}
		}
	});
});
