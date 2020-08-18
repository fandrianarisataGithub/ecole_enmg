$(document).ready(function(){
	// scroll 
	if($(window).width()>991) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 100) {
				$('.header').addClass('shrink');
			}
			else {
				$('.header').removeClass('shrink');
			}
		});
	}
		
	// /scroll
	var click_toggle = false ;
	var h_header = $("header").height() ;
	$(".navbar-inverse .navbar-toggle").on("click",function(e){
		e.preventDefault() ;
		if(click_toggle==false){
			afficher_li() ;
			click_toggle=true ;
		}
		else {
			cacher_li() ;
			click_toggle=false ;
		}
	})
	function afficher_li() {
		$("ul.navbar-nav").show() ;
		var h = $("ul.navbar-nav").height() ;
		//alert('head ='+h_header+" ul ="+h) ;
		var H = h_header + h ;
		var nouveau_hH = H + 10 ;
		$("header").css("height",nouveau_hH+"px") ;
	}
	function cacher_li() {
		var larg = $(window).width() ;
		$("ul.navbar-nav").hide() ;
		$("header").css("height",h_header+"px") ;
		
	}

})