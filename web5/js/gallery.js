$(document).ready(function(){
		var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    autoplay:false,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true
		});
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[500])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
		})



		$(document).ready(function(){
			$('.hunber').click(function(){
				$('#topMessage').fadeOut(1500);
				$('.hunber').css('display','none');	
			 	$('.hunber2').css('display','block');	
			 	$('.box1').fadeIn(1500);
			});	
			$('.hunber2').click(function(){
				$('#topMessage').fadeIn(1500);
				$('.topMessage').css('display','none');
				$('.hunber2').css('display','none');	
			 	$('.hunber').css('display','block');	
			 	$('.box1').fadeOut(1500)
			});
		});	


		$(".toggle-icon").click(function() {
          $('#nav-container').toggleClass("pushed");
        });
});