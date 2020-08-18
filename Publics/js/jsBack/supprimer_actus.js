$(document).ready(function(){
	$("body").on("click",".suppr_actus",function(e){
		e.preventDefault() ;
		var id = $(this).attr("data_id") ;
		$.ajax({
			url : "Controllers/suppr_actus.php" ,
			type : "POST" ,
			data : {'id_actus' : id} ,
			dataType : 'html' ,
			success : function(r) {
				//alert(r) ;
				if(r=="supprimer") {
					$("#tableau_actus_view").load("Views/Back/tableau_actus.php") ;
				}
			},
			error : function() {
				alert("tsy voafafa ... ") ;
			}
		})
	})
})