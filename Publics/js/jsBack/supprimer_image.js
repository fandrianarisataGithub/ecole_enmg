$(document).ready(function(){
	$("#gallerie").load("Views/Back/gallerie_liste.php") ;
	$("body").on('click','.action_gallerie a' , function(){
		var id = $(this).attr("data-id") ;
		//alert(id) ;
		$.ajax({
			url : "Controllers/ajoutGallerie.php" ,
			type : "POST" ,
			data : {'id_gallerie' : id} ,
			dataType : 'html' ,
			success : function(r) {
				if(r=="maty"){
					$("#gallerie").load("Views/Back/gallerie_liste.php") ;
				}
				else {
					alert('tsy tafa') ;
				}
			},
			error : function() {
				alert("tsy voafafa ... ") ;
			}
		})
	})
})