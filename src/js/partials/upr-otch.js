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
	prevArrow: '<div class="oc-slick-prev"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L7.68299 2.15238C8.43704 1.49259 9.56296 1.49259 10.317 2.15238L17 8" stroke="#555665" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="oc-slick-next"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L10.317 6.84762C9.56296 7.50741 8.43704 7.50741 7.68299 6.84762L1 0.999999" stroke="#A0A0B1" stroke-width="2"/></svg></div>',
	asNavFor: '.rs-ssb-main',
	focusOnSelect:true,

	responsive: [
		{
			breakpoint: 700,
			settings: {
			}
		}
	]
});
$(window).resize(function () {
	$('.rs-ssb-thumbs').slick('setPosition');
});
