/*Theme    : assan
 * Author  : Design_mylife
 * Version : V1.8
 *
 */

 $( window ).resize(function() {
		$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
//sticky header on scroll
$(function () {
  $(window).load(function () {
    $(".sticky").sticky({topSpacing: 0});
  });

  /* ==============================================
  WOW plugin triggers animate.css on scroll
  =============================================== */
  var wow = new WOW(
    {
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100, // distance to the element when triggering the animation (default is 0)
      mobile: false        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();

  //parallax
  $(window).stellar({
    horizontalScrolling: false,
    responsive: true/*,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0*/
  });

  //transparent header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.transparent-header').css("background", "#252525");
    } else {
      $('.transparent-header').css("background", "transparent");
    }
  });

  //language changer
  var pathname = window.location.pathname;
  var path = $(".fr .lang").length ? pathname.replace(/(\/fr\/|\/fr$)/, '/') : "/fr" + pathname;
  var url = window.location.protocol + "//" + window.location.host + path;
  $("a.lang").attr("href", url);
});
