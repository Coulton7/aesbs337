function validation()
{
  var orgName = document.getElementById('orgName');
  var orgPhone = document.getElementById('orgPhone');
  var orgEmail = document.getElementById('orgEmail');
  var orgWorkers = document.getElementById('orgWorkers');
  var roi = document.getElementById('roi');
  var orgType = document.getElementById('orgType');

    if (orgName.value ==""){
      window.alert("Please enter your business name");
      orgName.focus();
      return false;
    }

    if (orgEmail.value ==""){
      window.alert("Please enter your email");
      orgEmail.focus();
      return false;
    }

    if (orgPhone.value ==""){
      window.alert("Please enter your business telephone number");
      orgPhone.focus();
      return false;
    }

    if (orgWorkers.value ==""){
      window.alert("Please enter your number of employees");
      orgWorkers.focus();
      return false;
    }

    if (roi.value ==""){
      window.alert("Please enter a return on investment timeframe");
      roi.focus();
      return false;
    }

    if($('input[name=orgType]:checked').length==0){
        window.alert("Please select a business type");
        orgType.focus();
        return false;
    }

    else{
     $('#createPDF').hide();
     $('#downloadPDF').show();
     $('#savePDF').show();
    }
}
