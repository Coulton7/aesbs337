$(document).ready(function() {
  $('#block-block-166').hide();
  $('.field-name-field-thumbnail').hide();

  if ($('.field-name-field-hubspot-form').length > 0) {
    $('.field-name-field-api-stream').hide();
    $('.field-name-field-thumbnail').show();
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
      $('.oembed').show();
      $('.field-name-field-thumbnail').hide();
      $('.field-name-field-hubspot-form').hide();
      $('#block-sharethis-sharethis-block').hide();
      $('.field-label').hide();
      $('#block-block-166').show();
    }
  });
