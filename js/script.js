$(document).ready(function(){

	$('#header-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: false,
	    dotsClass: 'slider-controls',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        750:{
	        	items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('.watch-video').on('click', function(){
		$('.intro').css("opacity", "1");
		var video = $('.intro')[0];
		
		if(video.paused){
			video.play();
		} else {
			video.pause();
		}
	});

	$('#work-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav: false,
	    dots: false,
	    center: true,
	    mergeFit: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        750:{
	        	items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('#reviews-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  adaptiveHeight: true,
	  asNavFor: '#reviews-slider-man'
	});
	$('#reviews-slider-man').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  variableWidth: true,
	  asNavFor: '#reviews-slider',
	  arrows: true,
	  appendArrows: $('.nav-arrows'),
	  prevArrow: $('.prev-slider'),
	  nextArrow: $('.next-slider'),
	  dots: false,
	  centerMode: true,
	  initialSlide: 3,
	  focusOnSelect: true
	});
});

/*
$(document).on('click', '.button', function() {
	var $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '&autoplay=1');
}); */