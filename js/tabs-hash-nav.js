(function($) {
  $(function() {
    var hashTab = window.location.hash;
    if (hashTab != '') {
      $('.nav-tabs [href="' + hashTab + '"]').tab('show');
      $(hashTab).addClass('active');
    }
  });
})(jQuery);
