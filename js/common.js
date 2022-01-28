// JavaScript Document

$(document).ready(function(){
    $('#pagetop,.pagetop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 450);
        return false;
    });
    $('a[href^=#]').click(function() {
      var speed = 450;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('html,body').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});
