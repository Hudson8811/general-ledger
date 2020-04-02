
const headerMenuTips = tippy('.sh-menu-item--with-sub', {
	content(reference) {
		const id = reference.getAttribute('data-template');
		const template = document.getElementById(id);
		return template.innerHTML;
	},

	allowHTML: true,
	duration: 0,
	arrow: true,
	delay: [0, 0],
	duration: [300, 300],
	placement: 'bottom-start',
	interactive: true,
	theme: 'tippy-header-menu',
	offset: [0, 63],
	maxWidth: 596
});

$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});


	if (window.matchMedia('(max-width: 1145px)').matches) {
		headerMenuTips.forEach(function (entry) {
			entry.disable();
		});
	}
	else {
		headerMenuTips.forEach(function (entry) {
			entry.enable();
		});
	}
	$(window).resize(function () {
		if (window.matchMedia('(max-width: 1145px)').matches) {
			headerMenuTips.forEach(function (entry) {
				entry.disable();
			});
		}
		else {
			headerMenuTips.forEach(function (entry) {
				entry.enable();
			});
		}
	});
});
