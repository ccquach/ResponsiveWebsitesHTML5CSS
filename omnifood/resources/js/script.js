$(document).ready(function () {
	/* Sticky navigation */
	new Waypoint({
		element: $('.js--section-features'),
		handler: function (direction) {
			direction === 'down' ?
				$('nav').addClass('sticky') :
				$('nav').removeClass('sticky');
		},
		offset: 60
	});

	/* Scroll on buttons */
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({
				scrollTop: $('.js--section-plans').offset().top
			},
			1000
		);
	});

	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({
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
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ?
					target :
					$('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
							scrollTop: target.offset().top
						},
						1000,
						function () {
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
	new Waypoint({
		element: $('.js--wp-1'),
		handler: function (direction) {
			$('.js--wp-1').addClass('animated fadeIn');
		},
		offset: '50%'
	});
	new Waypoint({
		element: $('.js--wp-2'),
		handler: function (direction) {
			$('.js--wp-2').addClass('animated fadeInUp');
		},
		offset: '50%'
	});
	new Waypoint({
		element: $('.js--wp-3'),
		handler: function (direction) {
			$('.js--wp-3').addClass('animated fadeIn');
		},
		offset: '50%'
	});
	new Waypoint({
		element: $('.js--wp-4'),
		handler: function (direction) {
			$('.js--wp-4').addClass('animated pulse');
		},
		offset: '50%'
	});

	/* Mobile nav */
	$('.js--nav-icon, .logo-black, .logo, .js--main-nav li a').click(function (e) {
		var windowWidth = $(window).width() + scrollbarWidth();
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		var clicked = e.target.className;

		// Exit function if menu closed and black logo clicked
		if (
			icon.hasClass('ion-ios-menu') &&
			(clicked === 'logo-black' || clicked === 'logo')
		)
			return;

		// Open and close menu
		if (windowWidth < 768) nav.slideToggle(200);

		// Change menu button icon state
		if (icon.hasClass('ion-ios-menu')) {
			icon.addClass('ion-ios-close');
			icon.removeClass('ion-ios-menu');
		} else {
			icon.addClass('ion-ios-menu');
			icon.removeClass('ion-ios-close');
		}
	});

	$(window).resize(function () {
		var windowWidth = $(window).width() + scrollbarWidth();
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		// Toggle main nav display based on window size
		if (windowWidth > 767) {
			nav.css('display', 'block');
		} else {
			// Mobile nav starts out closed
			nav.css('display', 'none');
			icon.addClass('ion-ios-menu');
			icon.removeClass('ion-ios-close');
		}
	});

	/* Maps */
	var map = new GMaps({
		div: '.map',
		lat: 38.7437396,
		lng: -9.15,
		zoom: 12
	});

	map.addMarker({
		lat: 38.7437396,
		lng: -9.230244,
		title: 'Lisbon',
		infoWindow: {
			content: '<p>Our Lisbon HQ</p>'
		}
	});
});

function scrollbarWidth() {
	var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
	// Append our div, do our calculation and then remove it 
	$('body').append(div);
	var w1 = $('div', div).innerWidth();
	div.css('overflow-y', 'scroll');
	var w2 = $('div', div).innerWidth();
	$(div).remove();
	return (w1 - w2);
}
