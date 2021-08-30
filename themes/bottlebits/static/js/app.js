// $(".ss-slider").click(function(event){
//    event.preventDefault();
// });
$(document).ready(function(){	
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })

	$('.shelf .shelf-block').on('click', function(){
		$(".slider .shelf-block").addClass('show_bg');
		$(".slider .shelf-block .shelf-block--wrap").addClass('shelf-block--slider');

		if($(this).hasClass('block1')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('expand');
		}
		if($(this).hasClass('block2')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('expand');
		}
		if($(this).hasClass('block3')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('expand');
		}
		if($(this).hasClass('block4')){
			$('.slider .shelf-block--details .shelf-block--wrap').removeClass('expand');
			$('.slider').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('expand');
		}
		$('.podium').addClass('podium-animate');
   	});

 	var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        paginationClickable: false,
        spaceBetween: 0
    });

});


