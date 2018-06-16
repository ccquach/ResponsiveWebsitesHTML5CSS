$(document).ready(function() {
  /* Sticky navigation */
  var waypoint = new Waypoint({
    element: $('.js--section-features'),
    handler: function(direction) {
      direction === 'down'
        ? $('nav').addClass('sticky')
        : $('nav').removeClass('sticky');
    },
    offset: 60
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-plans').offset().top
      },
      1000
    );
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-features').offset().top
      },
      1000
    );
  });

  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */
  var waypoint = new Waypoint({
    element: $('.js--wp-1'),
    handler: function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    offset: '50%'
  });
  var waypoint = new Waypoint({
    element: $('.js--wp-2'),
    handler: function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    offset: '50%'
  });
  var waypoint = new Waypoint({
    element: $('.js--wp-3'),
    handler: function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    },
    offset: '50%'
  });
  var waypoint = new Waypoint({
    element: $('.js--wp-4'),
    handler: function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    },
    offset: '50%'
  });

  /* Mobile nav */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-ios-menu')) {
      icon.addClass('ion-ios-close');
      icon.removeClass('ion-ios-menu');
    } else {
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close');
    }
  });

  $(window).resize(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    if ($(window).width() > 767) {
      nav.css('display', 'block');
    } else {
      nav.css('display', 'none');
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close');
    }
  });
});
