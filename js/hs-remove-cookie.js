(function($) {
  $(document).ready(function() {
    var _hsp = window._hsp = window._hsp || [];
    document.getElementById("removeCookies").onclick = function() {
        _hsp.push(['revokeCookieConsent']);
    };
  });
})(jQuery);
