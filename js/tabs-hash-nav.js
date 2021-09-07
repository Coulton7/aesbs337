(function($) {
  $(function() {
    var hashTab = window.location.hash;
    if (hashTab != '') {
      $('.nav-tabs [href="' + hashTab + '"]').tab('show');
      $(hashTab).addClass('active');
    }
  });

  $(".dropdown-menu li a").click(function(){
    $(this).parents(".blue-tabs").find('.dropdown-btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".blue-tabs").find('.dropdown-btn').val($(this).data('value'));
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

  $(document).ready(function(){
  $('a[data-toggle="tab"]').on('show.bs.tab', function(e){
    sessionStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  var activeTab = sessionStorage.getItem('activeTab');
  if(activeTab){
    $('#vacTabs a[href="' + activeTab + '"]').tab('show');
  }
});

})(jQuery);
