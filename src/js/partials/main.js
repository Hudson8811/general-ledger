/*var mediaTablet= 1025;
var mediaMoreTablet= 1026;
var mediaMob= 700;
var mediaMoreMob= 701;*/

$(document).ready(function () {
	$("input[name='phone']").mask(" +7 (999) 999-99-99");

	$(".js-table-fancybox").fancybox({
		animationEffect: false,
		wheel: false,
		afterShow: function (instance, current) {
			if (window.matchMedia("(min-width: 1300px)").matches) {
				instance.scaleToActual(0, 0);
			}
		},
	});

	//////////////////

	$(".js-modal-fancy-caller").click(function () {
		modalFancyCaller($(this).attr("data-fancy-src"));
	});

	function modalFancyCaller(fancySrc) {
		event.preventDefault();
		$.fancybox.open({
			src: fancySrc,
			type: "inline",
			autoFocus: false,
			touch: false,
		});
	}

	////////////////

	/*var $grid1;
  var grid1_isMansory = false;
  var grid1_isMansoryLayoutNow = false;

  if (window.matchMedia("(min-width: 1026px)").matches) {
    if (!$(".hww-block").hasClass("js-hww-block--not-mansory")) {
      $grid1 = $(".hww-block").masonry({
        columnWidth: ".hww-block-item",
        gutter: 20,
        horizontalOrder: true,
      });
      $grid1.imagesLoaded().progress(function () {
        $grid1.masonry("layout");
      });
      grid1_isMansory = true;
      grid1_isMansoryLayoutNow = true;
    }
  }

  $(window).resize(function () {
    if (window.matchMedia("(max-width: 1025px)").matches) {
      if (grid1_isMansory && grid1_isMansoryLayoutNow === true) {
        $grid1.masonry("destroy");
        grid1_isMansoryLayoutNow = false;
        grid1_isMansory = false;
      }
    } else {
      if (!$(".hww-block").hasClass("js-hww-block--not-mansory")) {
        if (grid1_isMansory === false) {
          $grid1 = $(".hww-block").masonry({
            columnWidth: ".hww-block-item",
            gutter: 20,
            horizontalOrder: true,
          });
          grid1_isMansory = true;
          grid1_isMansoryLayoutNow = true;
        }
        if (grid1_isMansoryLayoutNow === false) {
          $grid1.masonry("layout");
          grid1_isMansoryLayoutNow = true;
        }
      }
    }
  });*/

	$(".oc-slider").slick({
		dots: true,
		arrows: true,
		vertical: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		verticalSwiping: true,
		appendArrows: $(".oc-slider-controls"),
		appendDots: $(".oc-slider-controls"),
		asNavFor: ".modal-fc-slider",
		prevArrow:
			'<div class="oc-slick-prev"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L7.68299 2.15238C8.43704 1.49259 9.56296 1.49259 10.317 2.15238L17 8" stroke="#555665" stroke-width="2"/></svg></div>',
		nextArrow:
			'<div class="oc-slick-next"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L10.317 6.84762C9.56296 7.50741 8.43704 7.50741 7.68299 6.84762L1 0.999999" stroke="#A0A0B1" stroke-width="2"/></svg></div>',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	const ocSlider = $(".oc-slider");
	const clientsSlider = $(".clients-slides");
	let activeSlider;

	if (clientsSlider.length) {
		//activeSlider = clientsSlider;
		activeSlider = "";
	} else {
		activeSlider = ocSlider;
	}

	$(".modal-fc-slider").slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		infinite: false,
		slidesToScroll: 1,
		asNavFor: activeSlider,
		appendDots: $(".modal-fc-slider-nav__dots"),
		prevArrow: ".modal-fc-slider-nav__prev",
		nextArrow: ".modal-fc-slider-nav__next",
	});

	$(".clients-slide.js-modal-comments-open").on("click", function (e) {
		var slideIndex = $(this).index();
		$(".modal-fc-slider").slick("slickGoTo", parseInt(slideIndex), true);
		$(".modal-fc-slide").removeClass("slick-current");
		$(this).addClass("slick-current");
	});

	$(".js-modal-comments-open, #js-modal-comments-open").click(function () {
		$.fancybox.open({
			src: "#modal-full-comment",
			type: "inline",
			opts: {
				touch: false,
				afterLoad: function (instance, current) {
					$(".modal-fc-slider").slick("setPosition");
				},
			},
		});
	});

	$(".clients-slides").slick({
		dots: true,
		arrows: true,
		slidesToShow: 2,
		infinite: false,
		slidesToScroll: 1,
		appendDots: $(".clients-slider-dots"),
		prevArrow: ".clients-slider-button-prev",
		nextArrow: ".clients-slider-button-next",
		responsive: [
			{
				breakpoint: 700,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".ans-item-question").click(function () {
		$(this)
			.toggleClass("ans-item-question--opened")
			.siblings(".ans-item-answer")
			.slideToggle(200);
	});

	$(".rs-item-header").click(function () {
		$(this)
			.toggleClass("rs-item--opened")
			.siblings(".rs-item-content")
			.slideToggle(200);
	});

	$(".hww-block-mobile-tab").click(function () {
		if (!$(this).hasClass("hww-block-mobile-tab--active")) {
			$(this)
				.addClass("hww-block-mobile-tab--active")
				.siblings()
				.removeClass("hww-block-mobile-tab--active");
			var index = $(this).index();
			$(".hww-block-item--active").removeClass(
				"hww-block-item--active-visible"
			);
			setTimeout(function () {
				var trans = index * -100;
				$(".hww-block-item").css({ transform: "translateX(" + trans + "%)" });
				$(".hww-block-item--active").removeClass("hww-block-item--active");
				$(".hww-block-item, .hww-block-item--fw")
					.eq(index)
					.addClass("hww-block-item--active")
					.addClass("hww-block-item--active-visible");
			}, 200);
		}
	});

	/////////////////////////////////

	var wcuAndSpBlockState = "default"; //default/scrollbar/slider
	var dsBlockState = "default"; //default/scrollbar/slider

	function wcuAndSpInitTablet() {
		console.log("wcuAndSpInitTablet");
		$(".wcu-block-wrap").mCustomScrollbar({
			theme: "custom-theme",
			axis: "x",
			scrollButtons: {
				enable: true,
			},
		});
		$(".sp-block-wrap:not(.sp-block-wrap--tablet-slider)").mCustomScrollbar({
			theme: "custom-theme mCS-custom-theme-sp",
			axis: "x",
			scrollButtons: {
				enable: true,
			},
		});
		$(".sp-block--tablet-slider:not(.slick-initialized)").slick({
			infinite: false,
			prevArrow:
				'<div class="hww-slick-prev hww-slick-prev--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="hww-slick-next hww-slick-next--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>',
		});

		wcuAndSpBlockState = "tablet";
	}

	function wcuAndSpInitMobile() {
		$(".wcu-block:not(.slick-initialized)").slick({
			infinite: false,
			prevArrow:
				'<div class="wwsy-slick-prev wwsy-slick-prev--wcu"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="wwsy-slick-next wwsy-slick-next--wcu"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		});
		$(".sp-block:not(.slick-initialized)").slick({
			infinite: false,
			prevArrow:
				'<div class="hww-slick-prev hww-slick-prev--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="hww-slick-next hww-slick-next--sp"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>',
		});

		wcuAndSpBlockState = "mobile";
	}
	function dsInitMobile() {
		$(".ds-block").slick({
			infinite: false,
			adaptiveHeight: false,
			prevArrow:
				'<div class="ds-slick-prev"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L9 8L1 0.999999" stroke="#5c5c5c" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="ds-slick-next"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L9 8L1 0.999999" stroke="#5c5c5c" stroke-width="2"/></svg></div>',
		});
		$(".steps-cards").slick({
			infinite: false,
			adaptiveHeight: false,
			prevArrow:
				'<div class="ds-slick-prev"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L9 8L1 0.999999" stroke="#5c5c5c" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="ds-slick-next"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L9 8L1 0.999999" stroke="#5c5c5c" stroke-width="2"/></svg></div>',
		});

		dsBlockState = "mobile";
	}

	if (window.matchMedia("(min-width: 701px) and (max-width: 1025px)").matches) {
		wcuAndSpInitTablet();
	}
	if (window.matchMedia("(max-width: 700px)").matches) {
		wcuAndSpInitMobile();
		dsInitMobile();
	}

	$(window).resize(function () {
		//tablet
		if (
			window.matchMedia("(min-width: 701px) and (max-width: 1025px)").matches
		) {
			if (wcuAndSpBlockState === "default") {
				wcuAndSpInitTablet();
			}
			if (wcuAndSpBlockState === "mobile") {
				$(".wcu-block.slick-slider").slick("unslick");
				$(".sp-block.slick-slider:not(.sp-block--tablet-slider)").slick(
					"unslick"
				);
				wcuAndSpInitTablet();
			}

			if (dsBlockState === "mobile") {
				$(".ds-block").slick("unslick");
				$(".steps-cards").slick("unslick");
				dsBlockState = "default";
			}
		} else {
			//mobile
			if (window.matchMedia("(max-width: 700px)").matches) {
				if (wcuAndSpBlockState === "default") {
					wcuAndSpInitMobile();
				}
				if (dsBlockState === "default") {
					dsInitMobile();
				}
				if (wcuAndSpBlockState === "tablet") {
					$(".wcu-block-wrap").mCustomScrollbar("destroy");
					$(".sp-block-wrap").mCustomScrollbar("destroy");
					wcuAndSpInitMobile();
				}
				if (wcuAndSpBlockState === "mobile") {
					$(".wcu-block").slick("setPosition");
					$(".sp-block").slick("setPosition");
				}
			} else {
				//desktop
				if (wcuAndSpBlockState === "tablet") {
					$(".wcu-block-wrap").mCustomScrollbar("destroy");
					$(
						".sp-block-wrap:not(.sp-block-wrap--tablet-slider)"
					).mCustomScrollbar("destroy");
					$(".sp-block--tablet-slider").slick("unslick");
				}
				if (wcuAndSpBlockState === "mobile") {
					$(".wcu-block").slick("unslick");
					$(".sp-block").slick("unslick");
				}
				wcuAndSpBlockState = "default";
			}
		}
	});

	/////////////
	////////////////ФУТЕР

	function adaptFooter() {
		if (window.matchMedia("(max-width: 1025px)").matches) {
			if (!$(".sf-col-3").parent().hasClass("sf-tb-container")) {
				$(".sf-col-3").appendTo($(".sf-tb-container"));
				$(".sf-col-5").appendTo($(".sf-tb-container"));
			}
		} else {
			if ($(".sf-col-3").parent().hasClass("sf-tb-container")) {
				$(".sf-col-3").appendTo($(".sf-container.container"));
				$(".sf-col-5").appendTo($(".sf-container.container"));
			}
		}
	}
	adaptFooter();
	$(window).resize(function () {
		adaptFooter();
	});

	if (window.matchMedia("(max-width: 1025px)").matches) {
		$(".js-wwsy-slider-tablet").slick({
			autoplay: true,
			autoplaySpeed: 2000,
			infinite: false,
			prevArrow:
				'<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		});
	}

	if (window.matchMedia("(max-width: 700px)").matches) {
		$(".wwsy-block:not(.js-wwsy-slider-tablet)").slick({
			autoplay: false,
			autoplaySpeed: 2000,
			infinite: false,
			prevArrow:
				'<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
		});

		//////////////////////////////

		$(".hww-block").slick({
			infinite: false,
			prevArrow:
				'<div class="hww-slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="hww-slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>',
		});

		$(".wwsy-uprotch").slick({
			infinite: false,
			prevArrow:
				'<div class="hww-slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
			nextArrow:
				'<div class="hww-slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>',
		});
	}

	$(window).resize(function () {
		if (window.matchMedia("(max-width: 1025px)").matches) {
			if (!$(".js-wwsy-slider-tablet").hasClass("slick-initialized")) {
				$(".js-wwsy-slider-tablet").slick({
					autoplay: true,
					autoplaySpeed: 2000,
					infinite: false,
					prevArrow:
						'<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
					nextArrow:
						'<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				});
			}
		} else {
			if ($(".js-wwsy-slider-tablet").hasClass("slick-initialized")) {
				$(".js-wwsy-slider-tablet").slick("unslick");
			}
		}

		if (window.matchMedia("(max-width: 700px)").matches) {
			if (!$(".wwsy-block").hasClass("slick-initialized")) {
				$(".wwsy-block").slick({
					autoplay: true,
					infinite: false,
					autoplaySpeed: 2000,
					prevArrow:
						'<div class="wwsy-slick-prev"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L2 16L14 31" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
					nextArrow:
						'<div class="wwsy-slick-next"><svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31L13 16L1 0.999999" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				});
			} else {
				$(".wwsy-block").slick("setPosition");
			}
			//////////////////////////////

			if (!$(".hww-block").hasClass("slick-initialized")) {
				$(".hww-block").slick({
					infinite: false,
					prevArrow:
						'<div class="hww-slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8L8 15" stroke="#555665" stroke-width="2"/></svg></div>',
					nextArrow:
						'<div class="hww-slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L7 8L1 0.999999" stroke="#555665" stroke-width="2"/></svg></div>',
				});
			} else {
				$(".hww-block").slick("setPosition");
			}
		} else {
			if (
				$(".wwsy-block:not(.js-wwsy-slider-tablet)").hasClass(
					"slick-initialized"
				)
			) {
				$(".wwsy-block:not(.js-wwsy-slider-tablet)").slick("unslick");
			}

			if ($(".hww-block").hasClass("slick-initialized")) {
				$(".hww-block").slick("unslick");
			}
		}
	});

	/* function wwsyBlock(params) {

         wcuAndSpBlockState = 'scrollbar';
     }*/

	function fixCommentsVerticalVariableHeight() {
		var maxHeight = -1;
		$(".oc-slider .slick-slide").each(function () {
			$(this).css("margin", "0");
		});

		$(".oc-slider").slick("setPosition");

		$(".oc-slider .slick-slide").each(function () {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$(".oc-slider .slick-slide").each(function () {
			if ($(this).height() < maxHeight) {
				$(this).css(
					"margin",
					Math.ceil((maxHeight - $(this).height()) / 2) + "px 0"
				);
			}
		});
	}
	setTimeout(function () {
		fixCommentsVerticalVariableHeight();
		$(".slick-initialized").slick("setPosition");
	}, 2000);

	$(window).resize(function () {
		fixCommentsVerticalVariableHeight();
		$(".slick-initialized").slick("setPosition");
	});

	$(".papers_prewiew").click(function () {
		$(this).toggleClass("papers_prewiew--hidden");
		$(this).siblings("span").toggleClass("papers_prewiew--hidden");
		var src = $(this).siblings("iframe").attr("src");
		$(this)
			.siblings("iframe")
			.attr("src", src + "&autoplay=1");
	});
});

$(".client_block--btn").click(function () {
	if ($(window).width() > 1026) {
		$(this).toggleClass("active");
		$(".client_block--item_wrapper").toggleClass("active");
		$(".client_block--item_wrapper:nth-child(n+5)").slideToggle();
	} else if ($(window).width() > 700) {
		$(this).toggleClass("active");
		$(".client_block--item_wrapper").toggleClass("active");
		$(".client_block--item_wrapper:nth-child(n+3)").slideToggle();
	} else {
		$(this).toggleClass("active");
		$(".client_block--item_wrapper").toggleClass("active");
		$(".client_block--item_wrapper:nth-child(n+4)").slideToggle();
	}
});

$(".hww-block-mobile-unwrap span").click(function () {
	$(".hww-block").addClass("hww-block--shown");
	setTimeout(function () {
		$(".hww-block-mobile-unwrap").addClass("hww-block-mobile-unwrap--dn");
	}, 200);
});

$(".wwsy-uprotch").on("afterChange", function (event, slick, currentSlide) {
	$("#cp").text(currentSlide + 1);
});

$(".ts-slider").slick({
	dots: true,
	arrows: true,
	slidesToShow: 1,
	infinite: true,
	slidesToScroll: 1,
	appendDots: $(".ts-slider__dots"),
	prevArrow: ".ts-slider__prev",
	nextArrow: ".ts-slider__next",
	customPaging: function(slider, i) {
		return '<div class="dot"><div class=\'inner-shadow\'>\n' +
				'  </div>\n' +
				'  \n' +
				'  <div class=\'hold right\'>\n' +
				'    <div class=\'fill\'></div>\n' +
				'  </div>\n' +
				'  \n' +
				'  <div class=\'hold left\'>\n' +
				'    <div class=\'fill\'></div>\n' +
				'  </div></div>';
	}
});


function dnsSliderInit() {
	if (window.matchMedia("(max-width: 1025px)").matches) {
		if (!$(".js-dns-slider").hasClass('slick-initialized')) {
			$(".js-dns-slider").slick({
				dots: false,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<div class="wwsy-uprotch-arrow-prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21L2.20414 12.3379C1.51959 11.5773 1.51959 10.4227 2.20414 9.66207L10 1" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="wwsy-uprotch-arrow-next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.79586 9.66207C9.48041 10.4227 9.48041 11.5773 8.79586 12.3379L1 21" stroke="#C7C7D5" stroke-width="2"/></svg></div>',
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							arrows: true
						},
					},
				],
			});
		}
  } else if (window.matchMedia("(min-width: 1026px)").matches) {
		if ($(".js-dns-slider").hasClass('slick-initialized')) {
			$(".js-dns-slider").slick("unslick");
		}
  }
}

$(window).resize(function () {
	setTimeout(function () {
		dnsSliderInit();
	}, 300)
});

dnsSliderInit();
