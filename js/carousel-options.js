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

    $("#carousel-fade").carousel({
      interval: 40000,
      pause: false
    });

    $('.carousel .vertical .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 1; i < 3; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

    $('.carousel .horizontal .item').each(function() {
      var next = $(this).prev();
      if (!next.length) {
        next = $(this).siblings(':last');
      }
      next.children(':first-child').clone().appendTo($(this));

      if ($(window).width() > 992) {
        for (var i = 1; i < 2; i++) {
          next = next.prev();
          if (!next.length) {
            next = $(this).siblings(':last');
          }

          next.children(':first-child').clone().appendTo($(this));
        }
      } else if ($(window).width() > 768) {
        for (var x = 1; x < 1; x++) {
          next = next.prev();
          if (!next.length) {
            next = $(this).siblings(':last');
          }

          next.children(':first-child').clone().appendTo($(this));
        }
      } else if ($(window).width() < 767) {
        for (var y = 1; y < 1;) {
          next = next.prev();
          if (!next.length) {
            next = $(this).siblings(':last');
          }

          next.children(':first-child').clone().appendTo($(this));
        }
      }

    });

  });

})(jQuery);
