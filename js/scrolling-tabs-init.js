(function($) {
  $(document).ready(function() {
    'use strict';
    $(activate);

    function activate() {
      $('.nav-tabs').scrollingTabs({
        enableSwiping: true,
        rightArrowContent: [
          '<i class="fas fa-caret-right fa-lg right-arrow"></i>'
        ].join(''),
        leftArrowContent: [
          '<i class="fas fa-caret-left fa-lg left-arrow"></i>'
        ].join('')
      }).on('ready.scrtabs', function() {
        $('.tab-content').show();
      });
    }
  });
})(jQuery);
