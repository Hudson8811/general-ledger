
$(document).ready(function () {
	$('.js-video-yt .video-yt__preview').click(function () {
		if($(this).siblings('iframe').length===0){
			var src = $(this).attr('data-src');
			$(this).parent().prepend('<iframe src="'+src+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		}
	});
});
