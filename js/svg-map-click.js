(function($) {
  $(document).ready(function() {
    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    var allRegions = $("#Lands > *");

    allRegions.on("click", function() {
      var link = ($(this).attr('id'));

      if (link === "Land-Tennessee") {
        $('.rockford').addClass('show');
      }
      if (link === "Land-Maine" || "Land-NH" || "Land-Vt" || "Land-NewJersey" || "Land-NewYork" || "Land-WestVirginia" || "Land-Wisconsin" || "Land-Minnesota") {
        $('.fairfield').addClass('show');
      }
      if (link === "Land-Washington" || "Land-Oregona" || "Land-Utah" || "Land-Colorado" || "Land-Wyoming" || "Land-Montana" || "Land-Nevada") {
        $('.longview').addClass('show');
      }
      if (link === "Land-Iowa" || "Land-Nebraska" || "Land-NorthDakota" || "Land-SouthDakota") {
        $('.marion').addClass('show');
      }
      if (link === "Land-Illinois" || "Land-Indiana" || "Land-Wisconsin") {
        $('.avtssi').addClass('show');
      }
      if (link === "Land-Texas") {
        $('.llp' && '.mss').addClass('show');
      }
      else {
        $('.connect-text').addClass('show');
      }

      allRegions.removeClass("on");
      $(this).addClass("on");
      $('body').addClass("noscroll");
      $('.location-pop-up').dialog({
        open: function(event, ui) {
          $('ui-dialog-titlebar-close').removeClass("ui-dialog-titlebar-close").html('<span class="close">x</span>');
        },
        width: "70%",
        height: 'auto',
        modal: true,
        title: 'Location Details',
        close: function() {},
      });
      $('.location-pop-up').on("dialogclose", function() {
        allRegions.removeClass("on");
        $('body').removeClass("noscroll");

        if (link === "Land-Tennessee") {
          $('.rockford').removeClass('show');
        }
        if (link === "Land-Maine" || "Land-NH" || "Land-Vt" || "Land-NewJersey" || "Land-NewYork" || "Land-WestVirginia" || "Land-Wisconsin" || "Land-Minnesota") {
          $('.fairfield').removeClass('show');
        }
        if (link === "Land-Washington" || "Land-Oregona" || "Land-Utah" || "Land-Colorado" || "Land-Wyoming" || "Land-Montana" || "Land-Nevada") {
          $('.longview').removeClass('show');
        }
        if (link === "Land-Iowa" || "Land-Nebraska" || "Land-NorthDakota" || "Land-SouthDakota") {
          $('.marion').removeClass('show');
        }
        if (link === "Land-Illinois" || "Land-Indiana" || "Land-Wisconsin") {
          $('.avtssi').addClass('show');
        }
        if (link === "Land-Texas") {
          $('.llp' && '.mss').removeClass('show');
        }
        else {
          $('.connect-text').removeClass('show');
        }

      });
    });
  });
})(jQuery);
