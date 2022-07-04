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

      switch(true){

      case(salesString == "ml"):
        document.getElementById('sales-ml').style.display='block';
        break;
      case(salesString == "sj"):
        document.getElementById('sales-sj').style.display='block';
        break;
      case(salesString == "rs"):
        document.getElementById('sales-rs').style.display='block';
        break;
      default:
        document.getElementById('sales').style.display="block";
        break;
    });
  });
})(jQuery);
