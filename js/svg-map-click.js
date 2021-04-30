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
        $('.ME').addClass('show');
        break;
      case(link == "Land-NH"):
        state = "New Hampshire";
        $('.fairfield').addClass('show');
        $('.NH').addClass('show');
        break;
      case(link == "Land-Vt"):
        state = "Vermont";
        $('.fairfield').addClass('show');
        $('.VT').addClass('show');
        break;
      case(link == "Land-NewYork"):
        state = "New York";
        $('.fairfield').addClass('show');
        $('.NY').addClass('show');
        break;
      case(link == "Land-Mass"):
        state = "Massachusetts";
        $('.fairfield').addClass('show');
        $('.MA').addClass('show');
        break;
      case(link == "Land-Conn"):
        state = "Connecticut";
        $('.fairfield').addClass('show');
        $('.CT').addClass('show');
        break;
      case(link == "Land-Pennsylvania"):
        state = "Pennsylvania";
        $('.fairfield').addClass('show');
        $('.PA').addClass('show');
        break;
      case(link == "Land-RI"):
        state = "Rhode Island";
        $('.fairfield').addClass('show');
        $('.RI').addClass('show');
        break;
      case(link == "Land-NewJersey"):
        state = "New Jersey";
        $('.fairfield').addClass('show');
        $('.NJ').addClass('show');
        break;
      case(link == "Land-Del"):
        state = "Delaware";
        $('.fairfield').addClass('show');
        $('.DE').addClass('show');
        break;
      case(link == "Land-Md"):
        state = "Maryland";
        $('.fairfield').addClass('show');
        $('.MD').addClass('show');
        break;
      case(link == "Land-WestVirginia"):
        state = "West Virginia";
        $('.fairfield').addClass('show');
        $('.WV').addClass('show');
        break;
      case(link == "Land-Virginia_1_"):
        state = "Virginia";
        $('.fairfield').addClass('show');
        $('.VA').addClass('show');
        break;
      case(link == "Land-NorthCarolina_1_"):
        state = "North Carolina";
        $('.rockford').addClass('show');
        $('.NC').addClass('show');
        break;
      case(link == "Land-SouthCarolina"):
        state = "South Carolina";
        $('.rockford').addClass('show');
        $('.SC').addClass('show');
        break;
      case(link == "Land-Georgia"):
        state = "Georgia";
        $('.rockford').addClass('show');
        $('.GA').addClass('show');
        break;
      case(link == "Land-Florida"):
        state = "Florida";
        $('.rockford').addClass('show');
        $('.FL').addClass('show');
        break;
      case(link == "Land-Alabama"):
        state = "Alabama";
        $('.rockford').addClass('show');
        $('.AL').addClass('show');
        break;
      case(link == "Land-Mississippi"):
        state = "Mississippi";
        $('.rockford').addClass('show');
        $('.MS').addClass('show');
        break;
      case(link == "Land-Tennessee"):
        state = "Tennessee";
        $('.rockford').addClass('show');
        $('.TN').addClass('show');
        break;
      case(link == "Land-Kentucky"):
        state = "Kentucky";
        $('.rockford').addClass('show');
        $('.KY').addClass('show');
        break;
      case(link == "Land-Ohio"):
        state = "Ohio";
        $('.rockford').addClass('show');
        $('.OH').addClass('show');
        break;
      case(link == "Land-Michigan_1_"):
        state = "Michigan";
        $('.fairfield').addClass('show');
        $('.MI').addClass('show');
        break;
      case(link == "Land-Indiana"):
        state = "Indiana";
        $('.avtssi').addClass('show');
        $('.IN').addClass('show');
        break;
      case(link == "Land-Illinois"):
        state = "Illinois";
        $('.avtssi').addClass('show');
        $('.IL').addClass('show');
        break;
      case(link == "Land-Wisconsin"):
        state = "Wisconsin";
        $('.fairfield').addClass('show');
        $('.avtssi').addClass('show');
        $('.WI').addClass('show');
        break;
      case(link == "Land-Minnesota"):
        state = "Minnesota";
        $('.fairfield').addClass('show');
        $('.MN').addClass('show');
        break;
      case(link == "Land-Iowa"):
        state = "Iowa";
        $('.marion').addClass('show');
        $('.IA').addClass('show');
        break;
      case(link == "Land-Missouri"):
        state = "Missouri";
        $('.marion').addClass('show');
        $('.MO').addClass('show');
        break;
      case(link == "Land-Arkansas"):
        state = "Arkansas";
        $('.rockford').addClass('show');
        $('.AR').addClass('show');
        break;
      case(link == "Land-Louisiana"):
        state = "Louisiana";
        $('.rockford').addClass('show');
        $('.LA').addClass('show');
        break;
      case(link == "Land-Texas"):
        state = "Texas";
        $('.llp').addClass('show');
        $('.mss').addClass('show');
        $('.TX').addClass('show');
        break;
      case(link == "Land-Oklahoma"):
        state = "Oklahoma";
        $('.rockford').addClass('show');
        $('.OK').addClass('show');
        break;
      case(link == "Land-Kansas"):
        state = "Kansas";
        $('.marion').addClass('show');
        $('.KS').addClass('show');
        break;
      case(link == "Land-Nebraska"):
        state = "Nebraska";
        $('.marion').addClass('show');
        $('.NE').addClass('show');
        break;
      case(link =="Land-SouthDakota"):
        state = "South Dakota";
        $('.marion').addClass('show');
        $('.SD').addClass('show');
        break;
      case(link == "Land-NorthDakota"):
        state = "North Dakota";
        $('.marion').addClass('show');
        $('.ND').addClass('show');
        break;
      case(link == "Land-Montana"):
        state = "Montana";
        $('.longview').addClass('show');
        $('.MT').addClass('show');
        break;
      case(link == "Land-Wyoming"):
        state = "Wyoming";
        $('.longview').addClass('show');
        $('.WY').addClass('show');
        break;
      case(link == "Land-Colorado"):
        state = "Colorado";
        $('.longview').addClass('show');
        $('.CO').addClass('show');
        break;
      case(link == "Land-NewMexico"):
        state = "New Mexico";
        $('.rockford').addClass('show');
        $('.NM').addClass('show');
        break;
      case(link == "Land-Arizona"):
        state = "Arizona";
        $('.rockford').addClass('show');
        $('.AZ').addClass('show');
        break;
      case(link == "Land-Utah"):
        state = "Utah";
        $('.longview').addClass('show');
        $('.UT').addClass('show');
        break;
      case(link == "Land-Idaho"):
        state = "Idaho";
        $('.longview').addClass('show');
        $('.ID').addClass('show');
        break;
      case(link == "Land-Washington"):
        state = "Washington";
        $('.longview').addClass('show');
        $('.WA').addClass('show');
        break;
      case(link == "Land-Oregona"):
        state = "Oregon";
        $('.longview').addClass('show');
        $('.OR').addClass('show');
        break;
      case(link == "Land-Nevada"):
        state = "Nevada";
        $('.longview').addClass('show');
        $('.NV').addClass('show');
        break;
      case(link == "Land-California"):
        state = "California";
        $('.rockford').addClass('show');
        $('.CA').addClass('show');
        break;
      case(link == "Land-Alaska"):
        state = "Alaska";
        $('.longview').addClass('show');
        $('.AK').addClass('show');
        break;
      case(link == "Land-Hawaii"):
        state = "Hawaii";
        $('.rockford').addClass('show');
        $('.HI').addClass('show');
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
        title: "Regional sales & contact Details for "+ state,
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
            $('.ME').removeClass('show');
            break;
          case(link == "Land-NH"):
            state = "New Hampshire";
            $('.fairfield').removeClass('show');
            $('.NH').removeClass('show');
            break;
          case(link == "Land-Vt"):
            state = "Vermont";
            $('.fairfield').removeClass('show');
            $('.VT').removeClass('show');
            break;
          case(link == "Land-NewYork"):
            state = "New York";
            $('.fairfield').removeClass('show');
            $('.NY').removeClass('show');
            break;
          case(link == "Land-Mass"):
            state = "Massachusetts";
            $('.fairfield').removeClass('show');
            $('.MA').removeClass('show');
            break;
          case(link == "Land-Conn"):
            state = "Connecticut";
            $('.fairfield').removeClass('show');
            $('.CT').removeClass('show');
            break;
          case(link == "Land-Pennsylvania"):
            state = "Pennsylvania";
            $('.fairfield').removeClass('show');
            $('.PA').removeClass('show');
            break;
          case(link == "Land-RI"):
            state = "Rhode Island";
            $('.fairfield').removeClass('show');
            $('.RI').removeClass('show');
            break;
          case(link == "Land-NewJersey"):
            state = "New Jersey";
            $('.fairfield').removeClass('show');
            $('.NJ').removeClass('show');
            break;
          case(link == "Land-Del"):
            state = "Delaware";
            $('.fairfield').removeClass('show');
            $('.DE').removeClass('show');
            break;
          case(link == "Land-Md"):
            state = "Maryland";
            $('.fairfield').removeClass('show');
            $('.MD').removeClass('show');
            break;
          case(link == "Land-WestVirginia"):
            state = "West Virginia";
            $('.fairfield').removeClass('show');
            $('.WV').removeClass('show');
            break;
          case(link == "Land-Virginia_1_"):
            state = "Virginia";
            $('.fairfield').removeClass('show');
            $('.VA').removeClass('show');
            break;
          case(link == "Land-NorthCarolina_1_"):
            state = "North Carolina";
            $('.rockford').removeClass('show');
            $('.NC').removeClass('show');
            break;
          case(link == "Land-SouthCarolina"):
            state = "South Carolina";
            $('.rockford').removeClass('show');
            $('.SC').removeClass('show');
            break;
          case(link == "Land-Georgia"):
            state = "Georgia";
            $('.rockford').removeClass('show');
            $('.GA').removeClass('show');
            break;
          case(link == "Land-Florida"):
            state = "Florida";
            $('.rockford').removeClass('show');
            $('.FL').removeClass('show');
            break;
          case(link == "Land-Alabama"):
            state = "Alabama";
            $('.rockford').removeClass('show');
            $('.AL').removeClass('show');
            break;
          case(link == "Land-Mississippi"):
            state = "Mississippi";
            $('.rockford').removeClass('show');
            $('.MS').removeClass('show');
            break;
          case(link == "Land-Tennessee"):
            state = "Tennessee";
            $('.rockford').removeClass('show');
            $('.TN').removeClass('show');
            break;
          case(link == "Land-Kentucky"):
            state = "Kentucky";
            $('.rockford').removeClass('show');
            $('.KY').removeClass('show');
            break;
          case(link == "Land-Ohio"):
            state = "Ohio";
            $('.rockford').removeClass('show');
            $('.OH').removeClass('show');
            break;
          case(link == "Land-Michigan_1_"):
            state = "Michigan";
            $('.fairfield').removeClass('show');
            $('.MI').removeClass('show');
            break;
          case(link == "Land-Indiana"):
            state = "Indiana";
            $('.avtssi').removeClass('show');
            $('.IN').removeClass('show');
            break;
          case(link == "Land-Illinois"):
            state = "Illinois";
            $('.avtssi').removeClass('show');
            $('.IL').removeClass('show');
            break;
          case(link == "Land-Wisconsin"):
            state = "Wisconsin";
            $('.fairfield').removeClass('show');
            $('.avtssi').removeClass('show');
            $('.WI').removeClass('show');
            break;
          case(link == "Land-Minnesota"):
            state = "Minnesota";
            $('.fairfield').removeClass('show');
            $('.MN').removeClass('show');
            break;
          case(link == "Land-Iowa"):
            state = "Iowa";
            $('.marion').removeClass('show');
            $('.IA').removeClass('show');
            break;
          case(link == "Land-Missouri"):
            state = "Missouri";
            $('.marion').removeClass('show');
            $('.MO').removeClass('show');
            break;
          case(link == "Land-Arkansas"):
            state = "Arkansas";
            $('.rockford').removeClass('show');
            $('.AR').removeClass('show');
            break;
          case(link == "Land-Louisiana"):
            state = "Louisiana";
            $('.rockford').removeClass('show');
            $('.LA').removeClass('show');
            break;
          case(link == "Land-Texas"):
            state = "Texas";
            $('.llp').removeClass('show');
            $('.mss').removeClass('show');
            $('.TX').removeClass('show');
            break;
          case(link == "Land-Oklahoma"):
            state = "Oklahoma";
            $('.rockford').removeClass('show');
            $('.OK').removeClass('show');
            break;
          case(link == "Land-Kansas"):
            state = "Kansas";
            $('.marion').removeClass('show');
            $('.KS').removeClass('show');
            break;
          case(link == "Land-Nebraska"):
            state = "Nebraska";
            $('.marion').removeClass('show');
            $('.NE').removeClass('show');
            break;
          case(link =="Land-SouthDakota"):
            state = "South Dakota";
            $('.marion').removeClass('show');
            $('.SD').removeClass('show');
            break;
          case(link == "Land-NorthDakota"):
            state = "North Dakota";
            $('.marion').removeClass('show');
            $('.ND').removeClass('show');
            break;
          case(link == "Land-Montana"):
            state = "Montana";
            $('.longview').removeClass('show');
            $('.MT').removeClass('show');
            break;
          case(link == "Land-Wyoming"):
            state = "Wyoming";
            $('.longview').removeClass('show');
            $('.WY').removeClass('show');
            break;
          case(link == "Land-Colorado"):
            state = "Colorado";
            $('.longview').removeClass('show');
            $('.CO').removeClass('show');
            break;
          case(link == "Land-NewMexico"):
            state = "New Mexico";
            $('.rockford').removeClass('show');
            $('.NM').removeClass('show');
            break;
          case(link == "Land-Arizona"):
            state = "Arizona";
            $('.rockford').removeClass('show');
            $('.AZ').removeClass('show');
            break;
          case(link == "Land-Utah"):
            state = "Utah";
            $('.longview').removeClass('show');
            $('.UT').removeClass('show');
            break;
          case(link == "Land-Idaho"):
            state = "Idaho";
            $('.longview').removeClass('show');
            $('.ID').removeClass('show');
            break;
          case(link == "Land-Washington"):
            state = "Washington";
            $('.longview').removeClass('show');
            $('.WA').removeClass('show');
            break;
          case(link == "Land-Oregona"):
            state = "Oregon";
            $('.longview').removeClass('show');
            $('.OR').removeClass('show');
            break;
          case(link == "Land-Nevada"):
            state = "Nevada";
            $('.longview').removeClass('show');
            $('.NV').removeClass('show');
            break;
          case(link == "Land-California"):
            state = "California";
            $('.rockford').removeClass('show');
            $('.CA').removeClass('show');
            break;
          case(link == "Land-Alaska"):
            state = "Alaska";
            $('.longview').removeClass('show');
            $('.AK').removeClass('show');
            break;
          case(link == "Land-Hawaii"):
            state = "Hawaii";
            $('.rockford').removeClass('show');
            $('.HI').removeClass('show');
            break;
          }
        });
    });
  });
})(jQuery);
