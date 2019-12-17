(function($){
	$(window).load(function() {
    $(function() {
      var url = window.location.href;
      if (/NONE/.test(url)) {
        $('#none').addClass('img-75');
      } else if (/IP55/.test(url)) {
        $('#ip55').addClass('img-75');
      } else if (/IP66/.test(url)) {
        $('#ip66').addClass('img-75');
      } else if (/IP69K/.test(url)) {
        $('#ip69k').addClass('img-75');
      } else {
        $('#any').addClass('img-75');
      }
    });
  });
})(jQuery);
