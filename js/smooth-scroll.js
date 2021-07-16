(function($) {
  $(document).ready(function() {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .not('[href="#edu"]')
      .not('[href="#wat"]')
      .not('[href="#eng"]')
      .not('[href="#ind"]')
      .not('[href="#ineq"]')
      .not('[href="#prod"]')
      .not('[href="#cli"]')
      .not('[href="#carousel-fade"]')
      .not('[href="#myCarousel"]')
      .not('[href="#newsCarousel"]')
      .not('[href="#techCarousel"]')
      .not('[href="#custCarousel"]')
      .not('[href="#whyCarousel"]')
      .not('[href="#sus-news"]')
      .not('[href="#sus-policies"]')
      .not('[href="#sus-broch"]')
      .not('[href="#sus-video"]')
      .not('[href="#sus-ind"]')
      .not('[href="#sus-case"]')
      .not('[href="#tech-news"]')
      .not('[href="#tech-policies"]')
      .not('[href="#tech-broch"]')
      .not('[href="#tech-video"]')
      .not('[href="#tech-ind"]')
      .not('[href="#tech-case"]')
      .not('[href="#cust-news"]')
      .not('[href="#cust-policies"]')
      .not('[href="#cust-broch"]')
      .not('[href="#cust-video"]')
      .not('[href="#cust-ind"]')
      .not('[href="#cust-case"]')
      .not('[href="#why-news"]')
      .not('[href="#why-policies"]')
      .not('[href="#why-broch"]')
      .not('[href="#why-video"]')
      .not('[href="#why-ind"]')
      .not('[href="#why-case"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
  });
})(jQuery);
