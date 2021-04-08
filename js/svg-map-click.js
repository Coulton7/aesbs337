(function($) {
  $(document).ready(function() {
    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    var allRegions = $("#Lands > *");

    allRegions.on("click", function() {
      var link = ($(this).attr('id'));

      if (link == "Land-Tennessee") {
        $('.rockford').addClass('show');
      }
      else if ((link == "Land-Maine") || (link == "Land-NH") || (link == "Land-Vt") || (link == "Land-NewJersey") || (link == "Land-NewYork") || (link == "Land-WestVirginia") || (link == "Land-Wisconsin") || (link == "Land-Minnesota")) {
        $('.fairfield').addClass('show');
      }
      else if ((link == "Land-Washington") || (link == "Land-Oregona") || (link == "Land-Utah") || (link == "Land-Colorado") || (link == "Land-Wyoming") || (link == "Land-Montana") || (link == "Land-Nevada")) {
        $('.longview').addClass('show');
      }
      else if ((link == "Land-Iowa") || (link == "Land-Nebraska") || (link == "Land-NorthDakota") || (link == "Land-SouthDakota")) {
        $('.marion').addClass('show');
      }
      else if ((link == "Land-Illinois") || (link == "Land-Indiana") || (link == "Land-Wisconsin")) {
        $('.avtssi').addClass('show');
      }
      else if (link == "Land-Texas") {
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
          $('.ui-dialog-titlebar-close').removeClass("ui-button-icon-primary ui-icon ui-icon-closethick").html('<span class="close-dialog">x</span>');
          $('.ui-dialog-title').addClass('h3');
        },
        width: "70%",
        height: 'auto',
        modal: true,
        title: 'Location Details',
        draggable: false,
        resizable: false,
        close: function() {},
      });
      $('.location-pop-up').on("dialogclose", function() {
        allRegions.removeClass("on");
        $('body').removeClass("noscroll");

        if (link == "Land-Tennessee") {
          $('.rockford').removeClass('show');
        }
        else if ((link == "Land-Maine") || (link == "Land-NH") || (link == "Land-Vt") || (link == "Land-NewJersey") || (link == "Land-NewYork") || (link == "Land-WestVirginia") || (link == "Land-Wisconsin") || (link == "Land-Minnesota")) {
          $('.fairfield').removeClass('show');
        }
        else if ((link == "Land-Washington") || (link == "Land-Oregona") || (link == "Land-Utah") || (link == "Land-Colorado") || (link == "Land-Wyoming") || (link == "Land-Montana") || (link == "Land-Nevada")) {
          $('.longview').removeClass('show');
        }
        else if ((link == "Land-Iowa") || (link == "Land-Nebraska") || (link == "Land-NorthDakota") || (link == "Land-SouthDakota")) {
          $('.marion').removeClass('show');
        }
        else if ((link == "Land-Illinois") || (link == "Land-Indiana") || (link == "Land-Wisconsin")) {
          $('.avtssi').addClass('show');
        }
        else if (link == "Land-Texas") {
          $('.llp' && '.mss').removeClass('show');
        }
        else {
          $('.connect-text').removeClass('show');
        }

      });
    });
  });
})(jQuery);
