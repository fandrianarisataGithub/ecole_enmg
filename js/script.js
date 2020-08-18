// preload 
	$(window).on('load', function () {

   		 $("#chargement").fadeOut(2000, function() {
	        $("body").css({
	            overflow: "auto"
	        });

	        $("#wrapper").animate({
	            opacity: "1"
	        },1000, function() {
	            $("#chargement").remove();
	        });

	    });

	});
$(document).ready(function(){
	

	// formation 

	$(function(){

	      $('#video-container').slimScroll();

	     $('#video-container').slimScroll({
	          allowPageScroll: true ,
	          height: '550px'
	      });

    });	
	 $("#link-inscription").click(function(e){
	 	e.preventDefault() ;
	 })

	 // video 

	 $(document).on('click','.js-videoPoster',function(e) {
		  //отменяем стандартное действие button
		  e.preventDefault();
		  var poster = $(this);
		  // ищем родителя ближайшего по классу
		  var wrapper = poster.closest('.js-videoWrapper');
		  videoPlay(wrapper);
		});

		//вопроизводим видео, при этом скрывая постер
		function videoPlay(wrapper) {
		  var iframe = wrapper.find('.js-videoIframe');
		  // Берем ссылку видео из data
		  var src = iframe.data('src');
		  // скрываем постер
		  wrapper.addClass('videoWrapperActive');
		  // подставляем в src параметр из data
		  iframe.attr('src',src);
		}

		// header 


	$('nav .btn_toggle  button').on('click', function(e) {
			e.preventDefault() ;
			$('nav #div_list_link > ul').slideToggle() ;
		})

		if($(window).width() < 768) {
			$('.list-item > a').on('click' , function(e)
			{
				e.preventDefault() ;
				
				$('nav #div_list_link > ul').slideToggle() ;

			})
			$('.slide_toggle a.a_dismiss').click(function(e){
				e.preventDefault() ;
				var data_id = $(this).attr("data_id") ;
				$('nav #div_list_link > ul').slideToggle() ;
				$('.clicked').removeClass('clicked') ;
				cacher_sous_menu(data_id) ;
			})
		}



		$('.w_icone').click(function(e){
			
			e.preventDefault() ;
			if( !$(this).hasClass('clicked')) {
				cache_le_present() ;
				var data_id = $(this).attr('data_id') ;
				afficher_sous_menu(data_id) ;
				$(this).addClass('clicked') ;
			}
			else {
				var data_id = $(this).attr('data_id') ;
				cacher_sous_menu(data_id) ;
				$(this).removeClass('clicked') ; 
			}
			
		})

		// quitter par $('#'+val+'.slide_toggle a.a_dismiss').show() ;

		$('.slide_toggle a.a_dismiss').click(function(e){
			e.preventDefault() ;
			var data_id = $(this).attr("data_id") ;
			$('.clicked').removeClass('clicked') ;
			cacher_sous_menu(data_id) ;
		})

		function afficher_sous_menu(val) {
				$('#'+val+'.slide_toggle h3').show() ;
				$('#'+val+'.slide_toggle a.a_dismiss').show() ;
				$('#'+val+' .slide_toggle_content').css("display" ,"flex") ;			
				$('#'+val+'.slide_toggle').css("width","100%") ;
		}

		function cacher_sous_menu(val) {
			$('#'+val+'.slide_toggle h3').hide() ;
			$('#'+val+'.slide_toggle a.a_dismiss').hide() ;
				$('#'+val+' .slide_toggle_content').css("display" ,"none") ;			
				$('#'+val+'.slide_toggle').css("width","0%") ;
		}

		function sous_menu_toggle() {
			var t = false ;
			if(t==false ) {
				afficher_sous_menu() ;
				t = !t ;
			}
			else {
				cacher_sous_menu() ;
				t = !t ;
			}
		}
		function cache_le_present() {
			// si il y a une affichage de sous menu
			if($('.clicked').length == 1) {
				var data_id = $('.clicked').attr("data_id") ;
				$('.clicked').removeClass('clicked') ;
				cacher_sous_menu(data_id) ;
				//alert(data_id)
			}
		}
		
})