$(document).ready(function(){
	$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
	$("#tableau_slide_view").on("click",".suppr_slide",function(){
		//alert($(this).attr("data_id")) ;
		var id = $(this).attr("data_id") ;
		$.ajax({
			url : "Controllers/suppr_slide.php" ,
			type : "POST" ,
			data : {'id_slide' : id} ,
			dataType : 'html' ,
			success : function(r) {
				//alert(r) ;
				if(r=="supprimer") {
					$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
					$("#gallerie").load("Views/Back/gallerie_liste.php") ;
					$("#baner_back").load("Views/Front/slick_slide.php",function(){
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
					}) ;
				}
			},
			error : function() {
				alert("tsy voafafa ... ") ;
			}
		})
	})
})