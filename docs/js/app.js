
$(document).ready(function(){	
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })

	$('.shelf .shelf-block').on('click', function(){
		$(".carousel .shelf-block").addClass('show_bg');
		$(".carousel .shelf-block .shelf-block--wrap").addClass('shelf-block--slider');

		if($(this).hasClass('block1')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('active');
		}
		if($(this).hasClass('block2')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active');
		}
		if($(this).hasClass('block3')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('active');
		}
		if($(this).hasClass('block4')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active');
		}
		$('.podium').addClass('podium-animate');
   	});


});
$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});

