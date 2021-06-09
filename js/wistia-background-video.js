var fullScreenVideo = fullScreenVideo

fullScreenVideo = {
  backgroundVideo: '9q0p0r2k6y',
  backgroundVideoDiv: '#wistia_9q0p0r2k6y',

  embedVideo: function() {
    var videoOptions = {};
    Wistia.obj.merge(videoOptions, {
      plugin: {
        cropFill: {
          src: "//fast.wistia.com/labs/crop-fill/plugin.js"
        }
      }
    });
    wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundVideo, videoOptions);

    wistiaEmbed.bind("play", function(){
      wistiaEmbed.pause();
      wistiaEmbed.time(0);
      $(fullScreenVideo.backgroundVideoDiv).css('visibility', 'visible');
      wistiaEmbed.play();
      return this.unbind;
    });
  },
  fixTextPostion: function(){
    var width = $(window).width()/2;
    var height = $(window).height()/2;
    var aspectRatio = width/height;

    if (aspectRatio < 0.5625){
      var newHeight = 0.5625 * width;
      $('#video-container').css({
        'width': width + 'px'
      });
      $('#main-image').css({
        'width': width + 'px'
      });
      $('#video-container').css({
        'height': newHeight + 'px'
      });
      $('#main-image').css({
        'height': newHeight + 'px'
      });
      $('#video-container').css({
        'bottom': -((newHeight - height) / 2) + 'px'
      });
      $('#main-image').css({
        'bottom': -((newHeight - height) / 2) + 'px'
      });
    } else{
      var newWidth = height / 0.5625;
      $('#video-conatiner').css({
        'width': newWidth + 'px'
      });
      $('#main-image').css({
        'width': newWidth + 'px'
      });
      $('#video-container').css({
        'height': height + 'px'
      });
      $('#main-image').css({
        'height': height + 'px'
      });
      $('#video-container').css({
        'left': -((newWidth - width) / 2) + 'px'
      });
      $('#main-image').css({
        'left': -((newWidth - width) / 2) + 'px'
      });
    }
  }
}


$(document).ready(function(){
  fullScreenVideo.fixTextPostion();
});

$(window).resize(function(){
  fullScreenVideo.fixTextPostion();
});

fullScreenVideo.embedVideo();
