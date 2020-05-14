$(document).ready(function () {
	$('.js-video-yt .video-yt__preview').click(function () {
		if($(this).attr('data-video-type')=='html5'){
			if ($(this).siblings('video').length === 0) {
				var src = $(this).attr('data-src');
				$(this).parent().addClass('video-yt-has-html5-video').prepend('<video autoplay controls src="' + src + '"></video>');
			}

		}
		else{
			if ($(this).siblings('iframe').length === 0) {
				var src = $(this).attr('data-src');
				$(this).parent().addClass('video-yt-has-iframe').prepend('<iframe src="' + src + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			}
		}

	});

/////////////////////////////////////////////////////

	$("[data-counter-id]").on('afterChange', function (event, slick, currentSlide) {
		var id = $(this).attr('data-counter-id');
		$('#' + id).text(currentSlide + 1);
	});

/////////////////////////////////////////////////////

	$('[data-mobile-unwrap-target-id] span').click(function () {
		var par= $(this).parent();
		var targetId=par.attr('data-mobile-unwrap-target-id');
		var targetRemovableClass=par.attr('data-mobile-unwrap-target-rclass');
		$('#'+targetId).removeClass(targetRemovableClass);
        setTimeout(function () {
            par.addClass('mobile-unwrap--dn');
        }, 200);
    });
});