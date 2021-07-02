(function($) {
  $(document).ready(function() {
    $('#createPDF').click(function validation() {
       var orgName = document.getElementById('orgName');

       if (orgName.value == "") {
         $(orgName).addClass("is-invalid");
         return false;

       } else {
        $('#createPDF').hide();
        $('#downloadPDF').show();
        $('#savePDF').show();
      }
    });
  });
})(jQuery);
