(function($){

  $.fn.fadeIcon = function(){

    var fade-icon = jQuery(".fade-icon");
    var contactIcon = -1;

    function showNextIcon() {
        ++contactIcon;
        fade-icon.eq(contactIcon % fade-icon.length)
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
