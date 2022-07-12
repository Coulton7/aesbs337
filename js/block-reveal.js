(function($) {
  $(document).ready(function() {

    function getUrlVars()
    {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    var salesString = getUrlVars()["s"];
    if(salesString == 'ml') {
      document.getElementById('sales-ml').style.display = 'block';
      document.getElementById('sales').style.display = 'none';
    }
    else if(salesString == 'sj') {
      document.getElementById('sales-sj').style.display = 'block';
      document.getElementById('sales').style.display = 'none';
    }
    else if(salesString == 'rs') {
      document.getElementById('sales-rs').style.display = 'block';
      document.getElementById('sales').style.display = 'none';
    }

    }
  });
})(jQuery);
