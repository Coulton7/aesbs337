(function($) {
  $(document).ready(function() {
    $('#createPDF').click(function validation() {
       var orgName = document.getElementById('orgName');
       var orgPhone = document.getElementById('orgPhone');
       var orgEmail = document.getElementById('orgEmail');
       var orgWorkers = document.getElementById('orgWorkers');
       var roi = document.getElementById('roi');
       var orgType = document.getElementById('orgType');
       var type1 = document.getElementById('type1');
       var type2 = document.getElementById('type2');
       var type3 = document.getElementById('type3');

       if (orgName.value == "") {
         $(orgName).addClass("is-invalid");
         return false;
       }

       if (orgEmail.value == "") {
         window.alert("Please enter your email");
         $(orgEmail).addClass("has-error has-feedback");
         return false;
       }

       if (orgPhone.value == "") {
         $(orgPhone).addClass("has-error has-feedback");
         return false;
       }

       if (orgWorkers.value == "") {
         $(orgWorkers).addClass("has-error has-feedback");
         return false;
       }

       if (roi.value == "") {
         $(roi).addClass("has-error has-feedback");
         return false;
       }

       if ($('input[name=orgType]:checked').length == 0) {
         window.alert("Please select a business type");
         $(type1).addClass("has-error");
         $(type2).addClass("has-error");
         $(type3).addClass("has-error");
         return false;
       } else {
        $('#createPDF').hide();
        $('#downloadPDF').show();
        $('#savePDF').show();
      }
    })
  });
})(jQuery);
