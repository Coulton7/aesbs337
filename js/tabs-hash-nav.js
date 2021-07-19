(function($) {
  $(function() {
    var hashTab = window.location.hash;
    if (hashTab != '') {
      $('.nav-tabs [href="' + hashTab + '"]').tab('show');
      $(hashTab).addClass('active');
    }
  });

  $('.shadow-box-tabs .media-tab').hide();
  var tabDivHeight = 0;
  $('.shadow-box-tabs .media-tab').each(function () {
    $(this).show();
    if ($(this).height() > tabDivHeight)
      tabDivHeight = $(this).height();
    $(this).hide();
  });
  $('.shadow-box-tabs .media-tab').height(tabDivHeight);

})(jQuery);
