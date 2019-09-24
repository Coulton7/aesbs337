(function($) {
  $(window).load(function() {
    $(function e(n) {
      if (0 < n.childNodes.length)
        for (var t = 0; t < n.childNodes.length; t++) e(n.childNodes[t]);
      3 == n.nodeType && /\S/.test(n.NodeValue) && function(e, n) {
        var t = e.data;
        if (!e.nextSibling || "sup" !== e.nextSibling.nodeName.toLowerCase()) {
          t = e.data.replace(/\bWarman\b/gi, "$&<sup>&reg;</sup>");
          var i = function() {
            var e = document.createElement("div"),
              n = document.createDocumentFragment();
            for (e.innerHTML = t; e.firstChild;) n.appendChild(e.firstChild);
            return n
          }();
          n.insertBefore(i, e), n.removeChild(e)
        }
      }(n, n.parentElement)
    })
    (document.getElementsByTagName("html")[0]);
  })
})(jQuery);
