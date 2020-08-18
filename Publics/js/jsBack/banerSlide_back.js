$(document).ready(function(){
	$('.slick').slick({
		draggable: true,
	    arrows: false,
	    dots: true,
	    fade: true,
	    speed: 1500,
	    autoplay: true,
		autoplaySpeed: 5000,
	    infinite: true,
	    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	    touchThreshold: 100
	});
})