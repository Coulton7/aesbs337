_hsq.push(['trackEvent', {
  id: 'vexClose',
  value: closed
}]);

$(document).ready(function() {

});

(function($) {
$(document).ready(function(){
  if(localStorage.getItem('vexClosed') != 'closed'){
      vex.dialog.open({
        message: "Can't find what you are looking for maybe try going to aesseal.com",
        contentClassName: 'text-center',
        buttons: [
          $.extend({}, vex.dialog.buttons.YES, {
            className: 'col-lg-4 col-lg-pull-2 col-xs-5 col-xs-pull-1 btn-red',
            text: 'Go to aesseal.com',
            click: function() {
              window.location.href = 'https://www.aesseal.com/';
            }
          }),
          $.extend({}, vex.dialog.buttons.NO, {
            className: 'col-xs-5 col-xs-pull-1 col-lg-4 col-lg-pull-2 btn-default',
            text: 'Remain on this site',
          })
        ],
        afterClose: function() {
          localStorage.setItem('vexClosed','closed');
        }
      });
    }
  });
})(jQuery);
