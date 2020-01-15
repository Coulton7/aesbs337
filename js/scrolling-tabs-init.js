(function($) {
  $(document).ready(function() {
    'use strict';
    $(activate);

    function activate() {
      $('.nav-tabs').scrollingTabs({
        enableSwiping: true,
        cssClassLeftArrow: 'fas fa-caret-left fa-2x padding-2em left-arrow',
        cssClassRightArrow: 'fas fa-caret-right fa-2x padding-2em right-arrow'
      }).on('ready.scrtabs', function() {
        $('.tab-content').show();
      });
    }
  });
})(jQuery);
