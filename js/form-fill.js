  $(document).ready(function() {
  $('#block-block-166').hide();
  if ($('.field-name-field-hubspot-form').length > 0) {
      $('.download-field-wrapper').hide();
  }


function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var submitString = getUrlVars()["fs"];
if(submitString=='y'){
  $('.download-field-wrapper').show();
  $('.field-name-field-hubspot-form').hide();
  $('#block-sharethis-sharethis-block').hide();
  $('.field-label').hide();
  $('#block-block-166').show();
}
});
