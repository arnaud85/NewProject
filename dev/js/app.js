$(document).ready( function() {

	$(".button-collapse").sideNav();

	// FIXED NAVBAR
	$(window).scroll( function () {

		var scroll = $(window).scrollTop();

		if (scroll > 0) {
			
			$('nav').addClass('scrolled');
		
		} else if(scroll <= 0){
			
			$('nav').removeClass('scrolled');
		}

	});

}); 