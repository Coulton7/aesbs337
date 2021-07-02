(function($) {
  $(document).ready(function() {
    $('#createPDF').click(function validation() {
       var orgName = document.getElementById('orgName');

       if (orgName.value == "") {
         $(orgName).addClass("is-invalid");
         $('.invalid-feedback').removeClass('display-none');
         $('html, body').animate({
           scrollTop: ($('.is-invalid').offset().top - 100)
         }, 1000);
         return false;

       } else {
        $('#createPDF').hide();
        $('#downloadPDF').show();
        $('#savePDF').show();
      }
    });
  });
})(jQuery);
