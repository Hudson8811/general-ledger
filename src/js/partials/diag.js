$(document).ready(function () {
	if (window.matchMedia('(max-width: 767px)').matches) {
		initWNSslider();
		initNCSslider();
		initWWSSslider();
	}

	if (window.matchMedia('(min-width: 768px)').matches &&
		window.matchMedia('(max-width: 1023px)').matches) {
		customScrollCondition();
	}

	if (window.matchMedia('(max-width: 1023px)').matches) {
		initWMSslider();
		initWWSYslider();
	}
});

function initWMSslider() {
	$('.js-wms-slider').slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: false,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}

function initWNSslider() {
	$('.js-wns-slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
	});
}

function initNCSslider() {
	$('.js-ncs-slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
	});
}

function initWWSSslider() {
	$('.wwss-block').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
	});
}

function customScrollCondition() {
	$('.js-scroll-condition').mCustomScrollbar({
		axis: 'x',
		scrollButtons: {
			enable: true
		},
		theme: "custom-theme mCS-custom-theme-sp"
	});
}

function initWWSYslider() {
	$('.js-wwsy-diag').slick({
		arrows: true,
		rows: 2,
		slidesPerRow: 2,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',

		responsive: [
			{
				breakpoint: 768,
				settings: {
					rows: 4,
					slidesPerRow: 1
				}
			}
		]
	});
}
