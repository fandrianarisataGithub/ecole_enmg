$(document).ready(function(){
	// on regle la hauteur de la navigation

	var h = $(window).height() ;

	//alert(h) ;

	$("#gauche").height(h) ;

	var tab_corps = ["corps_gallerie","corps_banner","corps_actus","corps_l_ecole","corps_concours","corps_documentation","corps_formation"] ;
	
	// lorsque les liens sont cliqué

	$("#back_navigation nav ul li a").on("click",function(e){
		e.preventDefault() ;
		var data_link = $(this).attr("data_link") ;
		if(data_link=="corps_gallerie") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=0) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		// banner
		else if(data_link=="corps_banner") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=1) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		//actus
		else if(data_link=="corps_actus") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=2) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		//l_ecole
		else if(data_link=="corps_l_ecole") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=3) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		//concours
		else if(data_link=="corps_concours") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=4) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		//documentation
		else if(data_link=="corps_documentation") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=5) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
		//formation
		else if(data_link=="corps_formation") {
			for (var i = tab_corps.length - 1; i >= 0; i--) {
				if(i!=6) {
					$("#"+tab_corps[i]).hide() ;
				}
				else{
					$("#"+tab_corps[i]).show() ;
				}
			}
		}
	})
})