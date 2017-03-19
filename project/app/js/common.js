$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
    margin: 0,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
    	0: {
    		items: 1,
    	},
    	600: {
    		items: 2
    	},
    	1000: { 
    		items: 3
    	}
    }
  });
});