(function($) {
  $(document).ready(function() {
    $("#email-btn").click(function() {
      document.location.href = "'mailto:?subject=' + encodeURIComponent(document.title) + '&body=' + encodeURIComponent(document.URL));return false;";
    });
  });
  $("print-btn").click(function(){
    window.print();
  }
);
})(jQuery);
