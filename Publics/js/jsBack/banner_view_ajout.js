$(document).ready(function(){
	$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
	$("#baner_back").load("Views/Back/slick_slide.php",function(){
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
	//alert("ok") ;
	$("#show_gallerie").click(function(){
		//alert('ok')
		$("#unite_modal_banner").on("click",".bgd_modal",function(){
			//alert('ok') ;
			var id_gallerie = $(this).attr("data_id") ;
			//alert(id_gallerie) ;
			$("#hiddenInput").val(id_gallerie) ;
			$(".modal_banner").modal('hide') ;
			//alert($("#hiddenInput").val()) ;
		})
	})
	$("#ajout_slide").click(function(e){
		e.preventDefault() ;
		//alert($("#hiddenInput").val()) ;
		var id = $("#hiddenInput").val() ;
		var titre = $("#titre_banner").val() ;
		var parag = $("#parag_banner").val() ;
		$.ajax({
			url : "Controllers/banner_view_ajout.php" ,
			type : "POST" ,
			dataType  : "html" ,
			data : {
				"id_gallerie" : id ,
				"titre_slide" : titre ,
				"text_slide" : parag 
			} ,
			success : function(r) {
				if(r=="ajouter"){
					$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
					$("#baner_back").load("Views/Back/slick_slide.php",function(){
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
				alert('erreur ajax') ;
			}
		})
		
	})
})