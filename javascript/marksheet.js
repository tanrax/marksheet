jQuery(document).ready(function ($) {

  // Interactions

  var $toggle = $('#toggle');
  var $down = $('#down');
  var $overlay = $('#overlay');
  var $top = $('#top');
  var $banner = $('#banner');
  var $newsletter = $('#newsletter');

  $toggle.click( function() {
    $('html').addClass('open-menu');
  });

  $down.click( function() {
    $('html').addClass('open-navigation');
  });

  $top.click( function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $banner.click( function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $newsletter.offset().top
    }, 500);
  });

  $overlay.click( function() {
    $('html').removeClass('open-menu').removeClass('open-navigation');
  });



});
