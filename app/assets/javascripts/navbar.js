/*KA: Functionalities of the nav bar:

  1. Hide the SIB logo on the bar on page load
  2. Show it when the page is scrolled past the top header/banner
  3. Hide it again upon scrolling up.
  4. The first <li> item in the menu has left padding upon page load. This needs to be removed when the logo locks on to the nav bar
  5. Add the left padding again, when the logo dissapears.

*/

var ready;
ready = function() {

		/*KA: Hide the logo on nav bar on page load  */
	    	if ($(window).width() > 767) {
		  	$("#logo_div > a").hide();
		    }

		/*KA: Get the height of the banner */
		var topofbanner = $("#banner").outerHeight();
						
 		$(window).scroll(function() {

  		/*KA: On large screens: Show logo on the navbar and remove padding on 1st element on scrolldown */
		  if ($(window).width() > 767) {
        		if($(window).scrollTop() > topofbanner) { 
			$("#logo_div > a").show()
			$("#navbar-collapse-1 > ul > li").attr('style','padding-left: 0px;');
			}
		    }
		/*KA: On large screens: Hide logo when banner is visible and add the padding back when scrolling up*/
		if($(window).scrollTop() < topofbanner) { 
			 if ($(window).width() > 767) {
		      	$("#logo_div > a").hide();
	   		$("#navbar-collapse-1 > ul > li").eq(0).attr('style','padding-left: 245px;');	
       			}
		    }
		});


		/*KA: Hide the Header and Lock/Freeze the Navigation bar upon scroll down   */
		$('#topnavbar').affix({
		    offset: {
			top: $('#banner').height()
		    	}
		})


		/*--------------------------------
		Collapsed Nav Bar-on small screens
		----------------------------------*/




		/*===============================*/
};

$(document).ready(ready);
$(document).on('page:load', ready);




