/*KA: Functionalities of the nav bar:

  1. Hide the SIB logo on the bar on page load
  2. Show it when the page is scrolled past the top header/banner
  3. Hide it again upon scrolling up.
  4. The first <li> item in the menu has left padding upon page load. This needs to be removed when the logo locks on to the nav bar
  5. Add the left padding again, when the logo dissapears.

//18-May-2015: Changing the About in Navbar to School of Integrative Biology


*/

var ready;
ready = function() {
 
		/*KA: Hide the logo on nav bar on page load  */
	    	if ($(window).width() > 767) {
			$("#logo_div > a").hide();
		//KA: Chrome is the only browser that adds extra padding to the left of the first div. Hence handling it exclusively here, by adding the right amount of padding.
			if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
				$("#navitem1").attr('style','padding-left: 220px;');
			}
		    }

		/*KA: Get the height of the banner */
		var topofbanner = $("#banner").outerHeight();
						
 		$(window).scroll(function() {

  		/*KA: On large screens: Show logo on the navbar and remove padding on 1st element on scrolldown */
		  if ($(window).width() > 767) {
        		if($(window).scrollTop() > topofbanner) { 

			//KA: Show the SIB logo on navbar
			$("#logo_div > a").show()

			//KA: Hide the home button on the navbar
			$("#navbar_home > a").hide()
			
			//KA: Reduce the firstDIv padding to 0px when the SIB logo appears
			$("#navbar-collapse-1 > ul > li").attr('style','padding-left: 0px;');
			}
		    }
		/*KA: On large screens: Hide logo when banner is visible and add the padding back when scrolling up*/		if($(window).scrollTop() < topofbanner) { 
			 if ($(window).width() > 767) {
			
			//KA: Hide the SIB logo on navbar
		      	$("#logo_div > a").hide();
			
			//KA: Show the home button on the navbar
			$("#navbar_home > a").show()
	   		//$("#navbar-collapse-1 > ul > li").eq(0).attr('style','padding-left: 245px;');

			//KA: Add the padding back, so the list won't move to the left.
			$("#navitem1").eq(0).attr('style','padding-left: 245px;');

			//KA: To sHow the home button in the left corner, reduce the padding to 0px.
			$("#navbar_home").attr('style','padding-left: 0px;');

	
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




