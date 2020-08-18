$(document).ready(function(){
	$("body").on("click",".modifier_actus",function(e){
		e.preventDefault() ;
		var id_actus = $(this).attr("data_id") ;
		var titre = $(this).parent().siblings(".titre_date_actus_td").find('span').text() ;
		var details = $(this).parent().siblings(".text_details_actus_td").find('p').text() ;
		var image = $(this).parent().siblings(".image_actus_td").find('img').attr("src") ;
		var test_image = false ;
		$("#titre_date_actus_modif").val(titre) ;
		$("#text_details_actus_modif").val(details) ;
		$(".img_back_modif_actus").css("background-image","url("+image+")") ;
		$("#image_actus_modif").val(image) ;
		
		$("#show_gallerie_actus_modif").click(function(){
		//alert('ok')
		$("#unite_modal_banner").on("click",".bgd_modal",function(){
				//alert('ok') ;
				image = $(this).attr("data_image") ;
				//alert(id_gallerie) ;
				$("#image_actus_modif").val(image) ;
				$(".img_back_modif_actus").css("background-image","url("+image+")") ;
				//alert($("#hiddenInput").val()) ;
			})
		})
		// anao ajax
		$('#btn_modif_actus').on('click',function(e){
			e.preventDefault() ;
			var id_actusF = id_actus ;
			var titreF = $("#titre_date_actus_modif").val() ;
			var detailsF = $("#text_details_actus_modif").val() ;
			var imageF = image ;
			//alert(id_actusF+"/"+titreF+"/"+detailsF+"/"+imageF) ;
			$.ajax({
				url : "controllers/modifier_actus.php" ,
				type : "POST" ,
				dataType : "html" ,
				data : {
					"id_actus" : id_actusF ,
					"image_actus" : imageF ,
					"titre_date_actus" : titreF ,
					"text_details_actus" : detailsF
				} ,
				success : function(r) {
					if(r=="modifier") {
						$("#tableau_actus_view").load("Views/Back/tableau_actus.php") ;
						$("#form__modif")[0].reset() ;
						$(".img_back_modif_actus").css("background-image","url()") ;
					}
				},
				error : function() {
					alert('erreur ajax lesy e') ;
				}
			})
		})
	})
})
