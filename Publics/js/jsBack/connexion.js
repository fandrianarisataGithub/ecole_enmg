$(document).ready(function(){
	$('#se_connecter').on("click",function(e){
		e.preventDefault() ;
		if($('#login').val()!="" && $('#pass').val()!="") {
			//alert('ok');
			var login = $('#login').val() ;
			var tab = login.split("@") ;
			if(tab.length >= 2) {
				$.ajax({
					url : "Controllers/connexion_controller.php" ,
					type : "POST" ,
					data : {
						'email' : $('#login').val(),
						'pass' : $('#pass').val()
					},
					dataType : "html" ,
					success : function(r) {
						if(r==1) {
							window.location.href = "index.php?etat=logged" ;
						}
						else {
							$("#infos").slideDown() ;
							$("#infos").css("border-left","0px solid red").css("background","#ccc") ;
							$("#infos p").css("color","red").text(r) ;
							$("input").keypress(function(){
								$("#infos").slideUp() ;
							})
						}
					} ,
					error: function() {
						alert('erreur ajax') ;
					}
				})
			}
			else {
				$.ajax({
					url : "Controllers/connexion_controller.php" ,
					type : "POST" ,
					data : {
						'login' : $('#login').val(),
						'pass' : $('#pass').val()
					},
					dataType : "html" ,
					success : function(r) {
						if(r==1) {
							window.location.href = "index.php?etat=logged" ;
						}
						else {
							$("#infos").slideDown() ;
							$("#infos").css("border-left","0px solid red").css("background","#ccc") ;
							$("#infos p").css("color","red").text("Erreur de login") ;
							$("input").keypress(function(){
								$("#infos").slideUp() ;
							})
						}
					} ,
					error: function() {
						alert('erreur ajax') ;
					}
				})
			}
			
		}
		else {
			$("#infos").slideDown() ;
			$("#infos").css("border-left","0px solid red").css("background","#ccc") ;
			$("#infos p").css("color","red").text("Veuiller remplir tous les champs") ;
		}
	})
})