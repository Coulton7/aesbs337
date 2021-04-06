(function($){
  $(document).ready(function() {
    var allRegions = $("#Land > *");

    allRegions.on("click", function() {
      var link = ($(this).attr('id'));

      if (link == "Land-Tennesse"){
        $('.rockford').addClass('show');
      } else if (link == "Land-Maine" || "Land-NH" || "Land-Vt" || "Land-NewJersey" || "Land-NewYork" || "Land-WestVirginia" || "Land-Wisconsin" || "Land-Minnesota") {
        $('.fairfield').addClass('show');
      } else if (link == "Land-Washington" || "Land-Oregona" || "Land-Utah" || "Land-Colorado" || "Land-Wyoming" || "Lnad-Montana" || "Land-Nevada") {
        $('.longview').addClass('show');
      } else if (link == "Land-Iowa" || "Land-Nebraska" || "Land-NorthDakota" || "Land-SouthDakota") {
        $('.marion').addClass('show');
      } else if (link == "Land-Illinois" || "Land-Indiana" || "Land-Wisconsin") {
        $('.avtssi').addClass('show');
      } else if(link == "Land-Texas") {
        $('.llp' && '.mss').addClass('show');
      }

      allRegions.removeClass("on");
      $(this).addClass("on");
      $('body').addClass("noscroll");
      $('.location-pop-up').dialog({
        width: "70%",
        height: 'auto',
        modal:true,
        title: 'Location Details',
        close: function(){
        },
      });
      $('.location-pop-up').on("dialogclose", function(){
        allRegions.removeClass("on");
        $('body').removeClass("noscroll");

        if(link == "Land-Tennessee"){
          $('.rockford').removeClass('show');
        } else if (link == "Land-Maine" || "Land-NH" || "Land-Vt" || "Land-NewJersey" || "Land-NewYork" || "Land-WestVirginia" || "Land-Wisconsin" || "Land-Minnesota") {
          $('.fairfield').removeClass('show');
        } else if (link == "Land-Washington" || "Land-Oregona" || "Land-Utah" || "Land-Colorado" || "Land-Wyoming" || "Lnad-Montana") {
          $('.longview').removeClass('show');
        } else if (link == "Land-Iowa" || "Land-Nebraska" || "Land-NorthDakota" || "Land-SouthDakota") {
          $('.marion').removeClass('show');
        } else if (link == "Land-Illinois" || "Land-Indiana" || "Land-Wisconsin") {
          $('.avtssi').addClass('show');
        } else if(link == "Land-Texas") {
          $('.llp' && '.mss').removeClass('show');
        }

      });
    });
  });
})(jQuery);
