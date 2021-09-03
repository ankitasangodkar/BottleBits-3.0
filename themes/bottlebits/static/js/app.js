
$(document).ready(function(){	
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })
	$(".product-detailed").addClass('loading');


	$('.shelf .shelf-block').on('click', function(e){
		$(".shelf-block-bg").addClass('show_bg');
		$(".shelf").addClass('hidden');
		$(".carousel .shelf-block .shelf-block--wrap").addClass('shelf-block--slider');

		if($(this).hasClass('block1')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').next().addClass('next');
		}
		if($(this).hasClass('block2')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').next().addClass('next');
		}
		if($(this).hasClass('block3')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').next().addClass('next');
		}
		if($(this).hasClass('block4')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
		}
		if (event.cancelable) event.preventDefault();

		var params = window.location.search;
	    dest = '?title=' + $(this).attr('data-title').replace(/ /g,"_")  + params;
	    window.history.pushState({ path: dest }, '', dest);

	    var title = $(this).attr('data-title');  
	    $('#title').text(title);

		$('.podium').addClass('podium-animate');
   	});


});

$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
});

var $carousel = $('.carousel'),
    $carouselItems = $('.carousel-item', $carousel);

//This event is fired when the carousel has completed its slide transition.
	$carousel.on('slid.bs.carousel', function (e) {
    //Reset classes
    $carouselItems.removeClass('prev next');
    //Find current slide
    var $active = $(e.relatedTarget);
    
    if(($active).hasClass('wrap4')){
    	$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
    }else{
    	$active.next().addClass('next');
	}
	if(($active).hasClass('wrap1')){
		$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('prev');
	}
	$active.prev().addClass('prev');
});

$(".SWIPE_UP .shelf-block--picture").on('slid.bs.carousel', function (e) {
 	if (event.cancelable) e.stopPropagation();
 	if (event.cancelable) event.preventDefault();

});

$(document).ready(function (e) {
    jquerySwipeHandler.handleSwipe(".carousel-item", [
     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
    ], function (direction) {
	  	//console.log("swipe: ", direction);
		$(".active").addClass(direction);
		$(".shelf-block-bg").addClass("scrollUpContainer");

	});

    jquerySwipeHandler.handleSwipe(".region", [
     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
    ], function (direction) {
	  	//console.log("swipe: ", direction);
		$(".region").addClass("slide_up");
		$(".disterllery").addClass("showDisterlleryDetails");
		$(".tabs .region").removeClass("selected");
		$(".tabs .dest1").addClass("selected");
	});

    jquerySwipeHandler.handleSwipe(".disterllery", [
     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
    ], function (direction) {
	  	//console.log("swipe: ", direction);
	  	$(".disterllery").removeClass("showDisterlleryDetails").addClass("hideDisterlleryDetails");
		$(".bottle_story").addClass("showBottleStoryDetails");
		$(".tabs .dest1").removeClass("selected");
		$(".tabs .bottleStory").addClass("selected");
	});


    jquerySwipeHandler.handleSwipe(".bottle_story", [
     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
    ], function (direction) {
	  	//console.log("swipe: ", direction);
		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".show_bg").addClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").addClass("selected");
		$(".podium").removeClass("podium-animate");
		$(".bottle-details").removeClass("hide");
		$("header").css({position: "fixed"})
	});
});

