(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  var $myCarousel = $("#carousel-fade"),
    $firstAnimatingElems = $myCarousel
    .find(".item:first")
    .find("[data-animation ^= 'animated']");

  $myCarousel.carousel();

  doAnimations($firstAnimatingElems);

  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });

  function carouselNormalization() {
  var items = $('#carousel-fade .item'),
    heights = [],
    tallest;

  if (items.length) {
    function normalizeHeights() {
      items.each(function() {
        heights.push($(this).height());
      });
      tallest = Math.max.apply(null, heights);
      items.each(function() {
        $(this).css('min-height', tallest + 'px');
      });
    }
    normalizeHeights();

    $(window).on('resize orientationchange', function() {
      tallest = 0, heights.length = 0;
      items.each(function() {
        $(this).css('min-height', '0');
      });
      normalizeHeights();
    });
  }
}

window.onload = function() {
  carouselNormalization();
};

$(document).ready(function() {
  $("#carousel-fade").carousel( { interval: 6000, pause: false } );
  $('#pauseButton').click(function(){
    $('#carousel-fade').carousel('pause');
    $('#pauseButton').addClass('display-none');
    $('#playButton').removeClass('display-none');
  });

  $('#playButton').click(function(){
    $('#carousel-fade').carousel('cycle');
    $('#pauseButton').removeClass('display-none');
    $('#playButton').addClass('display-none');
  });

  var t;
  var start = document.getElementsByClassName('item active')[0].getAttribute("data-interval");
  t = setTimeout(function(){
    $('#carousel-fade').carousel('next')
  }, start);

  $('#carousel-fade').on('slid.bs.carousel', function(){
    clearTimeout(t);
    var duration = document.getElementsByClassName("item active")[0].getAttribute("data-interval");

    $('#carousel-fade').carousel('pause');
    t = setTimeout("$('#carousel-fade').carousel('next');", duration);
  })

});

})(jQuery);
