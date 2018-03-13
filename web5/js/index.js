$(document).ready(function(){
			
	$('.GTLogo img').mousemove(function(e){
		var theText = $(this).attr('hovertext');
		$('#theDiv').text(theText).show().css({
			left: e.pageX + 15 + 'px',
			top: e.pageY + 15 + 'px'
		});
	}).mouseout(function(){
		$('#theDiv').hide();
	});

	$('.GTLogo2 img').mousemove(function(e){
		var theText = $(this).attr('hovertext');
		$('#theDiv').text(theText).show().css({
			left: e.pageX + 15 + 'px',
			top: e.pageY + 15 + 'px'
		});
	}).mouseout(function(){
		$('#theDiv').hide();
	});

	

	$('.GTLogo img').click(function(){
		 	$('.GTLogo').css('display','none');	
		 	$('.GTLogo2').css('display','block');	
	});
	$('.GTLogo2 img').click(function(){
			$('.GTLogo2').css('display','none');	
			$('.GTLogo').css('display','block');
	});




	$('.hunber').click(function(){
		$('#topMessage').fadeOut(1500);
		$('.hunber').css('display','none');	
	 	$('.hunber2').css('display','block');	
	 	$('.box1').fadeIn(2500);
	 	$('.box2').fadeIn(2500);
	 	$('.box4').fadeIn(2500);
	 	$('.footer').fadeIn(2500);
	});	
	$('.hunber2').click(function(){
		$('#topMessage').fadeIn(1500);
		$('.topMessage').css('display','none');
		$('.hunber2').css('display','none');	
	 	$('.hunber').css('display','block');	
	 	$('.box1').fadeOut(1500);
	 	$('.box2').fadeOut(1500);
	 	$('.box4').fadeOut(1500);
	 	$('.footer').fadeOut(1500);
	});


	 $(".toggle-icon").click(function() {
      $('#nav-container').toggleClass("pushed");
    });
});			