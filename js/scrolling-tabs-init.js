(function($){
(function(){
  'use strict';
  $(activate);
  function activate(){
    $('.nav-tabs').scorllingTabs({
      enableSwiping: true
    }).on('ready.scrtabs', function(){
      $('.tab-content').show();
    });
  }
}());
})(jQuery);
