$(document).ready(function(){
	$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
	$('#myModal').modal({ show: false}) ;
	var titre_slide_td = "" ;
	var text_slide_td = "" ;
	var image_slide_td = "" ;
	var titre = "" ;
	var text = "" ;
	var image = "" ;
	var num = "" ;
	var id = "" ;
	var test_titre = false ;
	var test_text = false ;
	var test_image = false ;
	$("body").on("click",".modifier_slide",function(e){
		e.preventDefault() ;
		num = $(this).parent().attr('num') ;
		//alert(num) ;
		//alert($(this).attr("data_id")) ;
		$(this).hide("slow") ;
		$(this).siblings(".enregistrer_slide").css("background-color","#272727").css("border-color","#272727") ;
		 $(this).siblings(".enregistrer_slide").css("color","#fff") ;
		 id = $(this).attr("data_id") ;
		 titre_slide_td = $(this).parent().siblings(".titre_slide_td[num="+num+"]").find("span").text() ;
		 text_slide_td = $(this).parent().siblings(".text_slide_td[num="+num+"]").find("p").text() ;
		 image_slide_td = $(this).parent().parent().find(".img-responsive[img_num="+num+"]").attr("src") ;
		//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
		 
		 titre = $(this).parent().siblings(".titre_slide_td").find("span") ;
		 text = $(this).parent().siblings(".text_slide_td").find("p") ;
		image = $(this).parent().parent().find(".img-responsive") ;
		$(this).parent().parent().find("i.fa").css("opacity","1") ;
		$("body").on("click",".btn_edit_titre",function(e){
			e.preventDefault() ;
			test_titre = true ;
			$(this).parent().siblings("input").css("z-index","2") ;
			$(this).parent().siblings("input").val(titre_slide_td) ;
		})
		$("body").on("click",".btn_edit_text",function(e){
			e.preventDefault() ;
			test_text = true ;
			//alert(text_height)
			$(this).parent().siblings("textarea").css("z-index","2");
			$(this).parent().siblings("textarea").val(text_slide_td) ;
		})
		$("body").on("click",".btn_edit_image",function(e){
			e.preventDefault() ;
			num = $(this).siblings("img").attr("img_num") ;
				//alert(num) ;
			$('#myModal').modal({ show: true})
			$("body").on("click",".bgd_modal",function(){
				image_slide_td = $(this).attr("data_image") ;
				 $(".image_edit").val(image_slide_td) ;
				//alert(image_slide_td) ;
				$(".image_slide_td img[img_num="+num+"]").attr("src",""+$(this).attr("data_image")+"") ;
			})
			test_image = true ;
		})
	})
		$("body").on("click",".enregistrer_slide",function(e){
			e.preventDefault() ;
			num = $(this).parent().attr('num') ;
			if(test_titre==true && test_text==true && test_image==true) {
				titre_slide_td = $(this).parent().siblings(".titre_slide_td").find(".input_edit_titre").val();
				text_slide_td =  $(this).parent().siblings(".text_slide_td").find(".text_area_edit_text").val();
				image_slide_td = $(this).parent().siblings(".image_slide_td").find(".image_edit").val();
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"titre_slide" : titre_slide_td ,
						"text_slide" : text_slide_td ,
						"image_slide" : image_slide_td
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
			}

			// raha titre fotsiny 
			else if(test_titre==true && test_text==false && test_image==false){
				titre_slide_td = $(this).parent().siblings(".titre_slide_td").find(".input_edit_titre").val();
				
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"titre_slide" : titre_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})

			}
			
			// raha text ftsn 
			else if(test_titre==false && test_text==true && test_image==false) {
				text_slide_td =  $(this).parent().siblings(".text_slide_td").find(".text_area_edit_text").val();
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"text_slide" : text_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
			}

			// raha image ftsn

			else if(test_titre==false && test_text==false && test_image==true) {
				image_slide_td = $(".image_edit").val() ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"image_slide" : image_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
			}
			// le double eto 

			// raha text sy titre ftsn 
			else if(test_titre==true && test_text==true && test_image==false) {
				text_slide_td =  $(this).parent().siblings(".text_slide_td").find(".text_area_edit_text").val();
				titre_slide_td = $(this).parent().siblings(".titre_slide_td").find(".input_edit_titre").val();
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"titre_slide" : titre_slide_td ,
						"text_slide" : text_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
			}

			// raha titre sy sary ftsn 
			else if(test_titre==true && test_text==false && test_image==true) {
				titre_slide_td = $(this).parent().siblings(".titre_slide_td").find(".input_edit_titre").val();
				image_slide_td = $(".image_edit").val() ;
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"titre_slide" : titre_slide_td ,
						"image_slide" : image_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
				
			}

			// raha text sy sary ftsn 
			else if(test_titre==false && test_text==true && test_image==true) {
				text_slide_td = $(this).parent().siblings(".text_slide_td").find(".input_edit_text").val();
				image_slide_td = $(".image_edit").val() ;
				//alert("id = "+id+"/titre = "+titre_slide_td+"/ text = "+text_slide_td+"/"+image_slide_td) ;
				$.ajax({
					url : "Controllers/modifier_slide.php" ,
					type : "POST" ,
					data : {
						"id_slide" : id ,
						"text_slide" : text_slide_td ,
						"image_slide" : image_slide_td 
					} ,
					dataType : "html" ,
					success : function(r) {
						if(r=="modifier") {
							$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
							$(this).parent().parent().find("i.fa").css("opacity","0") ;
							$(this).siblings(".modifier_slide").show("slow") ;
							window.location.href = "index.php?action=modifier" ;
							$("#tableau_slide_view").load("Views/Back/tableau_slide_view.php") ;
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
							$("#baner").load("Views/Front/slick_slide.php",function(){
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
					} ,
					error : function() {
						alert("erreur de ajax") ;
					}
				})
				// alert(text_slide_td+"/"+image_slide_td) ;
			}
			
			else if(test_titre==false && test_text==false && test_image==false){
				$(this).css("background","transparent").css("border-color","transparent").css("color","transparent") ;
				$(this).parent().parent().find("i.fa").css("opacity","0") ;
				$(this).siblings(".modifier_slide").show("slow") ;
			}

		})
		

})