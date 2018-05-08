(function($){

  $.fn.fadeIcon = function(){

    var fade_icon = jQuery(".fade_icon");
    var contactIcon = -1;

    function showNextIcon() {
        ++contactIcon;
        fade_icon.eq(contactIcon % fade_icon.length)
            .show(0)
            .delay(5500)
            .hide(0, showNextIcon);
    }

    showNextIcon();
  }

})(jQuery);

jQuery(document).ready(function(){
  jQuery('.socialmedia').fadeIcon();
});
