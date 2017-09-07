$(document).ready(function(){

// Replace img SVG with PNG on unsupported browsers

  	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	      return $(this).attr('src').replace('.svg', '.png');
	    });
  	}
});
