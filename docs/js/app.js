$(document).ready(function(){
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })

	$('.shelf .shelf-block').on('click', function(){
		$(".slider .shelf-block").addClass('show_bg');
		$(".slider .shelf-block .shelf-block--wrap").addClass('shelf-block--slider');

		if($(this).hasClass('block1')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('swiper-slide-active');
			$('.slider').find('.shelf-block--details .shelf-block--wrap:nth-child(1)').addClass('expand');
		}
		if($(this).hasClass('block2')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('swiper-slide-active');
			$('.slider').find('.shelf-block--details .shelf-block--wrap:nth-child(2)').addClass('expand');
		}
		if($(this).hasClass('block3')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('swiper-slide-active');
			$('.slider').find('.shelf-block--details .shelf-block--wrap:nth-child(3)').addClass('expand');
		}
		if($(this).hasClass('block4')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('swiper-slide-active');
			$('.slider').find('.shelf-block--details .shelf-block--wrap:nth-child(4)').addClass('expand');
		}
		$('.podium').addClass('podium-animate');
   });

    new Swiper('.swiper-container', {
        
    });
});