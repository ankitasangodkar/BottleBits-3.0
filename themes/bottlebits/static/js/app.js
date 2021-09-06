

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
			$('.vertical-slider').find('.slide-item.wrap1').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').next().addClass('next');
		}
		if($(this).hasClass('block2')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active');
			$('.vertical-slider').find('.slide-item.wrap2').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').next().addClass('next');
		}
		if($(this).hasClass('block3')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('active');
			$('.vertical-slider').find('.slide-item.wrap3').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').next().addClass('next');
		}
		if($(this).hasClass('block4')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active');
			$('.vertical-slider').find('.slide-item.wrap4').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
		}
		if (event.cancelable) event.preventDefault();

	    dest = '?title=' + $(this).attr('data-title').replace(/ /g,"_");
	    window.history.pushState({ path: dest }, '', dest);

	    var title = $(this).attr('data-title');  
	    $('#title').text(title);

		$('.podium').addClass('podium-animate');

		$(window).on('popstate', function(event) {
			$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('prev');
	 		$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('active');
	 		$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('next');
	 		$(".shelf-block-bg").removeClass('show_bg');
			$(".shelf").removeClass('hidden');
			$('.podium').removeClass('podium-animate');
		});

   	});
	
	$(window).on("load", function(e) {
 	  var loc_address = window.location.href;
		console.log(loc_address);
		if(loc_address.includes("?title=")){
			e.stopPropagation();
		}
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
	  	$(".vertical-slider").removeClass("hide");
		$(".slide-item.active").addClass(direction);
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
		$("header").css({position: "fixed"});
		$(".slide-item.active .content").css({position: "fixed"})
	});
});

$(".hamburger-wrap").on("click", function(){
	$(".mobile-menu--overlay").addClass("open");
});
$(".cross").on("click", function(){
	$(".mobile-menu--overlay").removeClass("open");
});

$('.menu_list--items li').on('click', function(){
    $('.menu_list--items li.active').removeClass('active');
    $(this).addClass('active');
});

var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".plus");
var buttonMinus = $(".minus");

var incrementPlus = buttonPlus.click(function(e) {
	var $n = $(this)
		.parent(".quantity--count")
		.parent(".quantity-container")
		.find(".qty");
	$n.val(Number($n.val())+1 );
	var amount = Number($n.val());
	buttonMinus.removeClass('inactive');
	if(amount == 2){
		$(".glass2 .glass-filled").addClass("active");
	}
	if(amount == 3){
		$(".glass3 .glass-filled").addClass("active");
	}
	if(amount == 4){
		$(".glass4 .glass-filled").addClass("active");
	}
	if(amount == 5){
		buttonPlus.addClass('inactive');
		$(".glass5 .glass-filled").addClass("active");
	}
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".quantity--count")
		.parent(".quantity-container")
		.find(".qty");
	var amount = Number($n.val());
	console.log(amount);
	if (amount > 1) {
		$n.val(amount-1);
	}
	if(amount == 2){
		buttonMinus.addClass('inactive');
		$(".glass2 .glass-filled").removeClass("active");
	}
	if(amount == 3){
		$(".glass3 .glass-filled").removeClass("active");
	}
	if(amount == 4){
		$(".glass4 .glass-filled").removeClass("active");
	}
	if(amount == 5){
		buttonPlus.removeClass('inactive');
		$(".glass5 .glass-filled").removeClass("active");
	}
});

$(".cart--buttons .primary-button--dark").on('click', function(){
	$(".cart").addClass("hide");
	$(".cart-wrapper").fadeOut();
	$(".shelf-block-bg").addClass("animateBlock");
	$(".congratulations").removeClass("hide").addClass("animateBg");
	$(".shelf-block--picture").addClass("animatePicture");
	$(".outline-button").fadeIn();
});

$(".floating-btn .primary-button--dark").on('click', function(){
	$(".bottle-details").addClass("hide");
	$(".tab--name").fadeOut();
	$(".button").fadeOut();
	$(".arrow").removeClass("hide");
	$(".shelf-block--info").fadeIn();
	$(".shelf-block.content").addClass("cart");
	$(".wrap4 .bottle-details").fadeOut();
	$(".cart-wrapper").removeClass("hide");
});