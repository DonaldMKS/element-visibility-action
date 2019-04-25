/*
* Donald Harper
* Requires: jQuery and Animate.css
*/
jQuery(document).ready(function ($) {

	// Check elements that may be shown on page load or refresh without having to scroll
	checkElements();

	window.onscroll = function(e) {
		checkElements();
	}

	function checkElements() {
		// Check visibility action
		$('.visibility-action').each(function() {
			enableAction($(this));
		})
	}

	function enableAction(elm) {
		if(checkVisible(elm)) {
			elm.addClass('animated ' + elm.attr('visibility-action'));
		} else {
			elm.removeClass('animated ' + elm.attr('visibility-action'));
		}
	}

	/*
	* Credit: https://stackoverflow.com/a/5354536
	*/
	function checkVisible( elm, evalType ) {
	    evalType = evalType || "visible";

	    var vpH = $(window).height(), 
	        st = $(window).scrollTop(),
	        y = $(elm).offset().top,
	        elementHeight = $(elm).height();

	    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
	    if (evalType === "above") return ((y < (vpH + st)));
	}

});