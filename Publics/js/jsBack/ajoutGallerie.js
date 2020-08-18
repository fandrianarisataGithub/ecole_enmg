$(document).ready(function(){
	$("#gallerie").load("Views/Back/gallerie_liste.php") ;
	$("#btn-appeare-form-image").click(function(){
		$("#formulaire").css("position","absolute").css("z-index","1").slideToggle() ;
	})

	// mampiditra sary fotsiny

	$('#up_image').change(function(){
		var form = $('form')[0] ;
		var data = new FormData(form) ;
		var file = $(this).val() ;
		data.append('image',file) ;
		//console.log(file) ;
		$.ajax({
	       url: "Controllers/ajoutGallerie.php",
		   type: "POST",
		   data:  data,
		   contentType: false,
		         cache: false,
		   processData:false,
		   beforeSend : function()
		   {
		    //$("#preview").fadeOut();
		   	$("#infos-image").hide() ;
		   },
		   success: function(data){
		    $('#image_upload').css("background-image","url("+data+")") ;
		    // $("#gallerie").load("Views/Back/gallerie_liste.php") ;
		    // $("#unite_modal_banner").load("Views/Back/unite_modal_banner.php") ;
		    //console.log(data) ;
		   },
		    error: function() {
		   		$("#infos-image p").text('Veuiller recommencer') ;
		   		$("#infos-image").show() ;
	      	}          
	    });
	})


	$("#formulaire form").on('submit',(function(e) {
	  e.preventDefault();
	  $.ajax({
	       url: "Controllers/ajoutGallerie.php",
		   type: "POST",
		   data:  new FormData(this),
		   contentType: false,
		         cache: false,
		   processData:false,
		   beforeSend : function()
		   {
		    //$("#preview").fadeOut();
		   	$("#infos-image").hide() ;
		   },
		   success: function(data){
		    $('#image_upload').css("background-image","url("+data+")") ;
		    $("#gallerie").load("Views/Back/gallerie_liste.php") ;
		    $("#unite_modal_banner").load("Views/Back/unite_modal_banner.php") ;
		   },
		    error: function() {
		   		$("#infos-image p").text('Veuiller recommencer') ;
		   		$("#infos-image").show() ;
	      	}          
	    });
	 }));
})