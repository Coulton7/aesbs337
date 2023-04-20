(function($) {

  var $window = $(window),
  flexslider = { vars:{} };

  function getGridSize() {
    return (window.innerWidth < 768) ? 2 :
           (window.innerWidth < 992) ? 3 :
           (window.innerWidth < 1200) ? 4 : 4;
  }

  $(document).ready(function() {

    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false
    });

    $('.caption-slider').flexslider({
      controlNav: false,
      directionNav: false,
      slideshowSpeed: 5000,
    });

    $('.controlNav').flexslider({
      controlNav: true,
      directionNav: false
    });

    $('.carousel-slider').flexslider({
      controlNav: false,
      directionNav: true,
      animation: "slide",
      easing: "swing",
      animationLoop: true,
      pauseOnHover: true,
      itemWidth: 210,
      itemMargin: 10,
      minItems: getGridSize(),
      maxItems: getGridSize(),
      move: 1,
      start: function(slider){
        flexslider = slider;
      }
    });

    $('.newsslider').flexslider({
      controlNav: false,
      directionNav: false,
      start: function(slider) {
        var curSlide = slider.find("li.flex-active-slide");
        var id = ($(curSlide).attr("id"));
        var content = ($(curSlide, id).attr("data-type"));
        var ele = '<span class="headline">' + content.split('').join('</span><span class="headline">') + '</span>';

        $(ele).hide().appendTo($('.flex-active-slide p.typewrite')).each(function(i) {
          $(this).delay(50 * i).css({
            display: 'inline',
            opacity: 0
          }).animate({
            opacity: 1
          }, 50);
        });
      },
      before: function(slider) {
        $("span.headline").remove();
      },
      after: function(slider) {

        var curSlide = slider.find("li.flex-active-slide");
        var id = ($(curSlide).attr("id"));
        var content = ($(curSlide, id).attr("data-type"));

        var ele = '<span class="headline">' + content.split('').join('</span><span class="headline">') + '</span>';

        $(ele).hide().appendTo($('.flex-active-slide p.typewrite')).each(function(i) {
          $(this).delay(50 * i).css({
            display: 'inline',
            opacity: 0
          }).animate({
            opacity: 1
          }, 50);
        });
      },
      animation: "fade",
      slideshowSpeed: 10000,
      easing: "swing",
      animationLoop: true,
    });

    $('.product-slider').flexslider({
      controlNav: false,
      directionNav: false,
      animation: "fade",
      easing: "swing",
      animationLoop: true,
    });

    $('.directionNav').flexslider({
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 7000
    });

    $('.base-slider').flexslider({
      controlNav: false,
      directionNav: false
    });


    $('#directionnav').flexslider({
      animation: "slide",
      controlNav: false,
      directionNav: true
    });

  });

  function quoteSliderHeight() {
    $('.optionset-quote-slider').each(function(){
      var slideHeight = 0;
      $(this).find('.slides > li').each(function(){
        slideHeight = $(this).height();
        if (slideHeight < slideHeight) {
          slideHeight = slideHeight
        }
      });
      $(this).find('ul.slides').css({'height' : slideHeight})
    })
  }

  $(window).resize(function(){
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;

    quoteSliderHeight();
  });

  $(window).load(function() {
  setTimeout(function(){
    $('.optionset-4panel-products').resize();
  }, 1000);

  quoteSliderHeight();
  });

  $(document).ready(function() {
    quoteSliderHeight();
  });

})(jQuery);
