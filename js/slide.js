$(document).ready(function(){
  $(window).on('load resize', function(){
    var wW = $(window).width();
    var wH1 = wW * 0.67 * 0.8;
    var wH2 = $(window).height()-456;
    var wH;
    if (wH1 > wH2) {
      wH = wH1;
    }
    else {
      wH = wH2;
    }
    $('#content').css('height',wH+'px');
  });
});
$.fn.autoChange = function(config) {
  var options = $.extend({
    effect  : 'fade',
    type    : 'repaet',
    timeout : 3000,
    speed   : 1000
  }, config);

  return this.each(function() {

    var current = 0;
    var next = 1;

    var element = $(this).children();

    $(element).hide();

    $('img', element).hide();

    $(element[0]).show();

    for (i=0; i < element.length; i++) {
      var src = [];
      src[i] = $('img', element[i]).attr('src');
      $(element[i]).css('background-image','url('+src[i]+')');
    }

    elementWidth();

    $(window).resize(function() {
      elementWidth();
    });

    function elementWidth() {
      var windowWidth = $(window).width();
      element.css('width',windowWidth);
    }

    var change = function(){
      if (options.effect == 'fade') {
        $(element[current]).fadeOut(options.speed);
        $(element[next]).fadeIn(options.speed);
      } else if  (options.effect == 'slide') {
        $(element[current]).slideUp(options.speed);
        $(element[next]).slideDown(options.speed);
      }

      if (options.type == 'repeat') {
        if ((next + 1) < element.length) {
          current = next;
          next++;
        } else {
          current = element.length - 1;
          next = 0;
        }
      }

      if (options.type == 'stop') {
        if ((next + 1) < element.length) {
          current = next;
          next++;
        } else {
          return;
        }
      }
    };

    var timer = setInterval(function(){change();}, options.timeout);

  });
};

$(function() {
  $('#content #slide').autoChange({effect : 'fade',type : 'repeat',timeout: 5000,speed : 2000});
});
