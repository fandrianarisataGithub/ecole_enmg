$(document).ready(function(){
	$("#tableau_actus_view").load("Views/Back/tableau_actus.php") ;
	$("#show_gallerie_actus").click(function(){
		//alert('ok')
		$("#unite_modal_banner").on("click",".bgd_modal",function(){
			//alert('ok') ;
			var id_gallerie = $(this).attr("data_id") ;
			//alert(id_gallerie) ;
			$("#hiddenInput_actus").val(id_gallerie) ;
			//alert($("#hiddenInput").val()) ;
		})
	})
	$("#btn_ajout_actus").click(function(e){
		e.preventDefault() ;
		//alert($("#hiddenInput").val()) ;
		var id = $("#hiddenInput_actus").val() ;
		var titre = $("#titre_date_actus").val() ;
		var text = $("#text_details_actus").val() ;
		$.ajax({
			url : "Controllers/actus_view_ajout.php" ,
			type : "POST" ,
			dataType  : "html" ,
			data : {
				"id_gallerie" : id ,
				"titre_date_actus" : titre ,
				"text_details_actus" : text  
			} ,
			success : function(r) {
				if(r=="ajouter"){
					$("#tableau_actus_view").load("Views/Back/tableau_actus.php") ;
				}
			},
			error : function() {
				alert('erreur ajax') ;
			}
		})
	})
})