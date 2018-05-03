(function($){

  $.fn.fadeIcon = function(){

    var fade_icon = jQuery(".fade_icon");
    var contactIcon = -1;

    function showNextIcon() {
        ++contactIcon;
        fade_icon.eq(contactIcon % fade_icon.length)
            .fadeIn(900)
            .delay(900)
            .fadeOut(900, showNextIcon);
    }

    showNextIcon();
  }

})(jQuery);

jQuery(document).ready(function(){
  jQuery('.socialmedia').fadeIcon();
});
