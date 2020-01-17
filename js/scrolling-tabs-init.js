(function($) {
  $(document).ready(function() {
    'use strict';
    $(activate);

    function activate() {
      $('.nav-tabs').scrollingTabs({
        enableSwiping: true,
        widthMultiplier: 0.95,
        cssClassLeftArrow: 'fas fa-caret-left fa-3x left-arrow',
        cssClassRightArrow: 'fas fa-caret-right fa-3x right-arrow'
      }).on('ready.scrtabs', function() {
        $('.tab-content').show();
      });
    }
  });
})(jQuery);
