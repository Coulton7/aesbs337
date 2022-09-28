(function($){
  $(document).ready(function($){
    var imgSrc = $ ('.field-product-image .flexslider .slides li:nth-child(1) img').attr('src');

    $('.block-productenquiry').css('background-image', 'url(' + imgSrc + ')');
  });

  $(document).ready(function($){
    var indImg =  $('.views-field-field-industry-image .field-content img').attr('src');

    $('.block-solutionsenquiry').css('background-image', 'url(' + indImg + ')');
  })
})(jQuery);
