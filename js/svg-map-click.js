(function($) {
  $(document).ready(function() {
    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    var allRegions = $("#Lands > *");

    allRegions.on("click", function() {
      var link = ($(this).attr('id'));
      var state;
      switch(true){

      case(link == "Land-Maine"):
        state = "Maine";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-NH"):
        state = "New Hampshire";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Vt"):
        state = "Vermont";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-NewYork"):
        state = "New York";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Mass"):
        state = "Massachusetts";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Conn"):
        state = "Connecticut";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Pennsylvania"):
        state = "Pennsylvania";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-RI"):
        state = "Rhode Island";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-NewJersey"):
        state = "New Jersey";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Del"):
        state = "Delaware";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Md"):
        state = "Maryland";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-WestVirginia"):
        state = "West Virginia";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Virginia_1_"):
        state = "Virginia";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-NorthCarolina_1_"):
        state = "North Carolina";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-SouthCarolina"):
        state = "South Carolina";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Georgia"):
        state = "Georgia";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Florida"):
        state = "Florida";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Alabama"):
        state = "Alabama";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Mississippi"):
        state = "Mississippi";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Tennessee"):
        state = "Tennessee";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Kentucky"):
        state = "Kentucky";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Ohio"):
        state = "Ohio";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Michigan_1_"):
        state = "Michigan";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Indiana"):
        state = "Indiana";
        $('.avtssi').addClass('show');
        break;
      case(link == "Land-Illinois"):
        state = "Illinois";
        $('.avtssi').addClass('show');
        break;
      case(link == "Land-Wisconsin"):
        state = "Wisconsin";
        $('.fairfield').addClass('show');
        $('.avtssi').addClass('show');
        break;
      case(link == "Land-Minnesota"):
        state = "Minnesota";
        $('.fairfield').addClass('show');
        break;
      case(link == "Land-Iowa"):
        state = "Iowa";
        $('.marion').addClass('show');
        break;
      case(link == "Land-Missouri"):
        state = "Missouri";
        $('.marion').addClass('show');
        break;
      case(link == "Land-Arkansas"):
        state = "Arkansas";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Louisiana"):
        state = "Louisiana";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Texas"):
        state = "Texas";
        $('.llp').addClass('show');
        $('.mss').addClass('show');
        break;
      case(link == "Land-Oklahoma"):
        state = "Oklahoma";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Kansas"):
        state = "Kansas";
        $('.marion').addClass('show');
        break;
      case(link == "Land-Nebraska"):
        state = "Nebraska";
        $('.marion').addClass('show');
        break;
      case(link =="Land-SouthDakota"):
        state = "South Dakota";
        $('.marion').addClass('show');
        break;
      case(link == "Land-NorthDakota"):
        state = "North Dakota";
        $('.marion').addClass('show');
        break;
      case(link == "Land-Montana"):
        state = "Montana";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Wyoming"):
        state = "Wyoming";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Colorado"):
        state = "Colorado";
        $('.longview').addClass('show');
        break;
      case(link == "Land-NewMexico"):
        state = "New Mexico";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Arizona"):
        state = "Arizona";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Utah"):
        state = "Utah";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Idaho"):
        state = "Idaho";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Washington"):
        state = "Washington";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Oregona"):
        state = "Oregon";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Nevada"):
        state = "Nevada";
        $('.longview').addClass('show');
        break;
      case(link == "Land-California"):
        state = "California";
        $('.rockford').addClass('show');
        break;
      case(link == "Land-Alaska"):
        state = "Alaska";
        $('.longview').addClass('show');
        break;
      case(link == "Land-Hawaii"):
        state = "Hawaii";
        $('.rockford').addClass('show');
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


        switch(true){

          case(link == "Land-Maine"):
            state = "Maine";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-NH"):
            state = "New Hampshire";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Vt"):
            state = "Vermont";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-NewYork"):
            state = "New York";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Mass"):
            state = "Massachusetts";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Conn"):
            state = "Connecticut";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Pennsylvania"):
            state = "Pennsylvania";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-RI"):
            state = "Rhode Island";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-NewJersey"):
            state = "New Jersey";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Del"):
            state = "Delaware";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Md"):
            state = "Maryland";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-WestVirginia"):
            state = "West Virginia";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Virginia_1_"):
            state = "Virginia";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-NorthCarolina_1_"):
            state = "North Carolina";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-SouthCarolina"):
            state = "South Carolina";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Georgia"):
            state = "Georgia";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Florida"):
            state = "Florida";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Alabama"):
            state = "Alabama";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Mississippi"):
            state = "Mississippi";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Tennessee"):
            state = "Tennessee";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Kentucky"):
            state = "Kentucky";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Ohio"):
            state = "Ohio";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Michigan_1_"):
            state = "Michigan";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Indiana"):
            state = "Indiana";
            $('.avtssi').removeClass('show');
            break;
          case(link == "Land-Illinois"):
            state = "Illinois";
            $('.avtssi').removeClass('show');
            break;
          case(link == "Land-Wisconsin"):
            state = "Wisconsin";
            $('.fairfield').removeClass('show');
            $('.avtssi').removeClass('show');
            break;
          case(link == "Land-Minnesota"):
            state = "Minnesota";
            $('.fairfield').removeClass('show');
            break;
          case(link == "Land-Iowa"):
            state = "Iowa";
            $('.marion').removeClass('show');
            break;
          case(link == "Land-Missouri"):
            state = "Missouri";
            $('.marion').removeClass('show');
            break;
          case(link == "Land-Arkansas"):
            state = "Arkansas";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Louisiana"):
            state = "Louisiana";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Texas"):
            state = "Texas";
            $('.llp').removeClass('show');
            $('.mss').removeClass('show');
            break;
          case(link == "Land-Oklahoma"):
            state = "Oklahoma";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Kansas"):
            state = "Kansas";
            $('.marion').removeClass('show');
            break;
          case(link == "Land-Nebraska"):
            state = "Nebraska";
            $('.marion').removeClass('show');
            break;
          case(link =="Land-SouthDakota"):
            state = "South Dakota";
            $('.marion').removeClass('show');
            break;
          case(link == "Land-NorthDakota"):
            state = "North Dakota";
            $('.marion').removeClass('show');
            break;
          case(link == "Land-Montana"):
            state = "Montana";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Wyoming"):
            state = "Wyoming";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Colorado"):
            state = "Colorado";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-NewMexico"):
            state = "New Mexico";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Arizona"):
            state = "Arizona";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Utah"):
            state = "Utah";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Idaho"):
            state = "Idaho";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Washington"):
            state = "Washington";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Oregona"):
            state = "Oregon";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Nevada"):
            state = "Nevada";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-California"):
            state = "California";
            $('.rockford').removeClass('show');
            break;
          case(link == "Land-Alaska"):
            state = "Alaska";
            $('.longview').removeClass('show');
            break;
          case(link == "Land-Hawaii"):
            state = "Hawaii";
            $('.rockford').removeClass('show');
            break;
          }
        });
    });
  });
})(jQuery);
