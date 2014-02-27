(function() {
  var $;

  $ = jQuery;

  $(function() {
    var baseHeight, docHeight, footerHeight, footerTop;
    $('.gallery_slider_bxslider').bxSlider();
    docHeight = $(window).height();
    footerHeight = $('.footer').height();
    footerTop = $('.footer').position().top + footerHeight;
    baseHeight = docHeight - footerHeight * 2;
    $('.base').css('height', baseHeight);
    if (footerTop < docHeight) {
      return $('.footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
  });

}).call(this);
