
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


var $carousel = $('.carousel'),
    $carouselItems = $('.carousel-item', $carousel);

//This event is fired when the carousel has completed its slide transition.
$carousel.on('slid.bs.carousel', function (e) {
    //Reset classes
    $carouselItems.removeClass('prev next');
    //Find current slide
    var $active = $(e.relatedTarget);
    //Add corresponding classes to next and prev elements
    $active.next().addClass('next');
    $active.prev().addClass('prev');
});
