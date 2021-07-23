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

  function horizontalNormalization() {
    var items = $('.media-carousel .item'),
      heights = [],
      tallest;

    if (items.length) {
      function horizontalHeights() {
        items.each(function() {
          heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights);
        items.each(function() {
          $(this).css('min-height', tallest + 'px');
        });
      }
      horizontalHeights();

      $(window).on('resize orientationchange', function() {
        tallest = 0, heights.length = 0;
        items.each(function() {
          $(this).css('min-height', '0');
        });
        horizontalHeights();
      });
    }
  }

  window.onload = function() {
    horizontalNormalization();
  };

  $(document).ready(function() {

    if ($(window).width() > 767) {
      $('.mob-carousel').carousel({
        interval:5000,
      });
    } else {
      $('.mob-carousel').carousel({
        interval: false,
      });
    }

    $('div[data-ride="carousel"]').each(function() {
      var $carousel = $(this);
      var id = this.id;
      var relatedIndicators = $('li[data-target="#' + id + '"]');
      $carousel.on('slid.bs.carousel', function(e) {
        var index = $carousel.find('.carousel-inner .item').index($carousel.find('.carousel-inner .active'));
        relatedIndicators.removeClass('active');
        relatedIndicators.filter('[data-slide-to="' + index + '"]').addClass('active');
      });
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
      if ($(window).width() > 767) {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if ($(window).width() > 992) {
          for (var i = 1; i < 3; i++) {
            next = next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
          }
        } else if ($(window).width() > 767) {
          for (var x = 1; x < 2; x++) {
            next = next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
          }
        } else if ($(window).width() < 767) {

        }
      }

    });

  });

})(jQuery);
