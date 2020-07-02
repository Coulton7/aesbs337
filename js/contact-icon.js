(function($) {

  $.fn.contactIcon = function() {

    var contact_icon = jQuery(".contact_icon");
    var contactIcon = -1;

    function showNextIcon() {
        ++contactIcon;
        contact_icon.eq(contactIcon % contact_icon.length)
          .show(0)
          .delay(1800)
          .hide(0, showNextIcon);
        runCount++;
    }
    showNextIcon();
  };
})(jQuery);

jQuery(document).ready(function() {
  jQuery('.socialmedia').contactIcon();
});
