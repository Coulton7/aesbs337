(function($) {
  $(document).ready(function() {
    'use strict';
    $(activate);

    function activate() {
      $('.nav-tabs').scrollingTabs({
        enableSwiping: true,
        cssClassLeftArrow: '<i class="fas fa-caret-left fa-lg left-arrow"></i>',
        cssClassRightArrow: '<i class="fas fa-caret-right fa-lg right-arrow"></i>'
      }).on('ready.scrtabs', function() {
        $('.tab-content').show();
      });
    }
  });
})(jQuery);
