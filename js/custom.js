/*Theme    : assan
 * Author  : Design_mylife
 * Version : V1.8
 *
 */

 $( window ).resize(function() {
		$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
//sticky header on scroll
$(document).ready(function () {
		$(window).load(function () {
				$(".sticky").sticky({topSpacing: 0});
		});
});

/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */
$(document).ready(function () {
		var wow = new WOW(
						{
								boxClass: 'wow', // animated element css class (default is wow)
								animateClass: 'animated', // animation css class (default is animated)
								offset: 100, // distance to the element when triggering the animation (default is 0)
								mobile: false        // trigger animations on mobile devices (true is default)
						}
		);
		wow.init();
});


//parallax
$(document).ready(function () {
		$(window).stellar({
				horizontalScrolling: false,
				responsive: true/*,
				 scrollProperty: 'scroll',
				 parallaxElements: false,
				 horizontalScrolling: false,
				 horizontalOffset: 0,
				 verticalOffset: 0*/
		});
});


//transparent header
$(document).ready(function () {
		$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
						$('.transparent-header').css("background", "#252525");
				} else {
						$('.transparent-header').css("background", "transparent");
				}
		});
});
