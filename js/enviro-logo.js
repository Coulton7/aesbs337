(function($) {

  $.fn.enviroLogo = function() {

    var enviro_logo = jQuery(".enviro_logo");
    var enviroLogo = -1;
    var runCount = 0;

    function showNextLogo() {
      if (runCount < 101) {
        ++enviroLogo;
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0)
          .delay(5000)
          .hide(0, showNextLogo);
        runCount++;
      } else {
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0);
      }
    }
    showNextLogo();
  };
})(jQuery);

jQuery(document).ready(function() {
  jQuery('.envirologo-container').enviroLogo();
});
