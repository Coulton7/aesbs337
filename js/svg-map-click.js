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
      else if ((link == "Land-Maine") || (link == "Land-NH") || (link == "Land-Vt") || (link == "Land-NewJersey") || (link == "Land-NewYork") || (link == "Land-WestVirginia") || (link == "Land-Wisconsin") || (link == "Land-Minnesota") || (link == "Land-Pennsylvania")) {
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
        $('.llp').addClass('show');
        $('.mss').addClass('show');
      }
      else {
        $('.connect-text').addClass('show');
      }
      var state;
      switch(true){

      case(link == "Land-Maine"):
        state = "Maine";
        break;
      case(link == "Land-NH"):
        state = "New Hampshire";
        break;
      case(link == "Land-Vt"):
        state = "Vermont";
        break;
      case(link == "Land-NewYork"):
        state = "New York";
        break;
      case(link == "Land-Mass"):
        state = "Massachusetts";
        break;
      case(link == "Land-Conn"):
        state = "Connecticut";
        break;
      case(link == "Land-Pennsylvania"):
        state = "Pennsylvania";
        break;
      case(link == "Land-RI"):
        state = "Rhode Island";
        break;
      case(link == "Land-NewJersey"):
        state = "New Jersey";
        break;
      case(link == "Land-Del"):
        state = "Delaware";
        break;
      case(link == "Land-Md"):
        state = "Maryland";
        break;
      case(link == "Land-WestVirginia"):
        state = "West Virginia";
        break;
      case(link == "Land-Virginia_1_"):
        state = "Virginia";
        break;
      case(link == "Land-NorthCarolina_1_"):
        state = "North Carolina";
        break;
      case(link == "Land-SouthCarolina"):
        state = "South Carolina";
        break;
      case(link == "Land-Georgia"):
        state = "Georgia";
        break;
      case(link == "Land-Florida"):
        state = "Florida";
        break;
      case(link == "Land-Alabama"):
        state = "Alabama";
        break;
      case(link == "Land-Mississippi"):
        state = "Mississippi";
        break;
      case(link == "Land-Tennessee"):
        state = "Tennessee";
        break;
      case(link == "Land-Kentucky"):
        state = "Kentucky";
        break;
      case(link == "Land-Ohio"):
        state = "Ohio";
        break;
      case(link == "Land-Michigan_1_"):
        state = "Michigan";
        break;
      case(link == "Land-Indiana"):
        state = "Indiana";
        break;
      case(link == "Land-Illinois"):
        state = "Illinois";
        break;
      case(link == "Land-Wisconsin"):
        state = "Wisconsin";
        break;
      case(link == "Land-Minnesota"):
        state = "Minnesota";
        break;
      case(link == "Land-Iowa"):
        state = "Iowa";
        break;
      case(link == "Land-Missouri"):
        state = "Missouri";
        break;
      case(link == "Land-Arkansas"):
        state = "Arkansas";
        break;
      case(link == "Land-Louisiana"):
        state = "Louisiana";
        break;
      case(link == "Land-Texas"):
        state = "Texas";
        break;
      case(link == "Land-Oklahoma"):
        state = "Oklahoma";
        break;
      case(link == "Land-Kansas"):
        state = "Kansas";
        break;
      case(link == "Land-Nebraska"):
        state = "Nebraska";
        break;
      case(link =="Land-SouthDakota"):
        state = "South Dakota";
        break;
      case(link == "Land-NorthDakota"):
        state = "North Dakota";
        break;
      case(link == "Land-Montana"):
        state = "Montana";
        break;
      case(link == "Land-Wyoming"):
        state = "Wyoming";
        break;
      case(link == "Land-Colorado"):
        state = "Colorado";
        break;
      case(link == "Land-NewMexico"):
        state = "New Mexico";
        break;
      case(link == "Land-Arizona"):
        state = "Arizona";
        break;
      case(link == "Land-Utah"):
        state = "Utah";
        break;
      case(link == "Land-Idaho"):
        state = "Idaho";
        break;
      case(link == "Land-Washington"):
        state = "Washington";
        break;
      case(link == "Land-Oregona"):
        state = "Oregon";
        break;
      case(link == "Land-Nevada"):
        state = "Nevada";
        break;
      case(link == "Land-California"):
        state = "California";
        break;
      case(link == "Land-Alaska"):
        state = "Alaska";
        break;
      case(link == "Land-Hawaii"):
        state = "Hawaii";
        break;
      }

      allRegions.removeClass("on");
      $(this).addClass("on");
      $('body').addClass("noscroll");
      $('.location-pop-up').dialog({
        open: function(event, ui) {
          $('.ui-dialog-titlebar-close').removeClass("ui-button-icon-primary ui-icon ui-icon-closethick").html('<span class="close-dialog">x</span>');
          $('.ui-dialog-title').addClass('h2').addClass('text-center');
        },
        width: "70%",
        height: 'auto',
        modal: true,
        title: "Contact Details for "+ state,
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
        else if ((link == "Land-Maine") || (link == "Land-NH") || (link == "Land-Vt") || (link == "Land-NewJersey") || (link == "Land-NewYork") || (link == "Land-WestVirginia") || (link == "Land-Wisconsin") || (link == "Land-Minnesota") || (link == "Land-Pennsylvania")) {
          $('.fairfield').removeClass('show');
        }
        else if ((link == "Land-Washington") || (link == "Land-Oregona") || (link == "Land-Utah") || (link == "Land-Colorado") || (link == "Land-Wyoming") || (link == "Land-Montana") || (link == "Land-Nevada")) {
          $('.longview').removeClass('show');
        }
        else if ((link == "Land-Iowa") || (link == "Land-Nebraska") || (link == "Land-NorthDakota") || (link == "Land-SouthDakota")) {
          $('.marion').removeClass('show');
        }
        else if ((link == "Land-Illinois") || (link == "Land-Indiana") || (link == "Land-Wisconsin")) {
          $('.avtssi').removeClass('show');
        }
        else if (link == "Land-Texas") {
          $('.llp').removeClass('show');
          $('.mss').removeClass('show');
        }
        else {
          $('.connect-text').removeClass('show');
        }

      });
    });
  });
})(jQuery);
