jQuery(document).ready(function() {
	$(".intro-wrap .video-button").click(function(){
		$(this).hide();
		$(".intro-video").find("iframe").contents().find(".video").get(0).play();
	});
});
