(function($) {

     $(function() {
      $('#ri-grid').gridrotator({
        rows: 3,
        columns: 4,
        animType: 'slideBottom',
        animSpeed: 1000,
        interval: 600,
        step: 1,
        interval: 2000,
        w1024: {
          rows: 3,
          columns: 4
        },
        w768: {
          rows: 4,
          columns: 3
        },
        w480: {
          rows: 4,
          columns: 3
        },
        w320: {
          rows: 2,
          columns: 4
        },
        w240: {
          rows: 1,
          columns: 7
        },
      });

    $('#six-grid').gridrotator({
      rows: 2,
      columns: 6,
      animType: 'slideBottom',
      animSpeed: 1000,
      interval: 600,
      step: 1,
      interval: 2000,
      w1024: {
        rows: 2,
        columns: 6
      },
      w768: {
        rows: 4,
        columns: 3
      },
      w480: {
        rows: 3,
        columns: 4
      },
      w320: {
        rows: 3,
        columns: 4
      },
      w240: {
        rows: 1,
        columns: 7
      },
    });
  });
})(jQuery);
