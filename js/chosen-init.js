(function($){
  $( document ).ready(function() {
    $(".form-select").chosen({
      disable_search_threshold: 10,
      no_results_text: "Sorry, no results found."
    });
  });
})(jQuery);
