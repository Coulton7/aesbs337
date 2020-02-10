(function($) {
  function countdown() {
    var i = document.getElementById('counter');
    if (parseInt(i.innerHTML) <= 0) {

      document.getElementById('replace').textContent = "If re-direct has failed click the link to the global site";
      $('#ext-link').removeClass("display-none");
      return;

    }
    if (parseInt(i.innerHTML) != 0) {
      i.innerHTML = parseInt(i.innerHTML) - 1;
    }
  }
})(jQuery);

(function($) {
  $(document).ready(function() {
    setInterval(function() {
      countdown();
    }, 1000);
  });
})(jQuery);
