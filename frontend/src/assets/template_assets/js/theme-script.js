/* ------------------------------------------------
  Project:   Misto - Factory and Industrial HTML5 Template
  Author:    ThemeHt
------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Preloader  
  3. FullScreen
  4. Menu
  5. Owl carousel
  6. Counter
  7. Magnific Popup
  8. Isotope
  9. Scroll to top
  10. Banner Section
  11. Fixed Header
  12. Text Color, Background Color And Image
  13. Contact Form
  14. ProgressBar
  15. Masonry
  16. Countdown
  17. Parallax
  18. Particles
  19. HT Window load and functions
  

------------------------ */

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var $window = $(window),
  $document = $(document),
  $body = $('body'),
  $fullScreen = $('.fullscreen-banner') || $('.section-fullscreen'),
  $halfScreen = $('.halfscreen-banner');

//Check if function exists
$.fn.exists = function () {
  return this.length > 0;
};

/*------------------------------------
  HT PreLoader
--------------------------------------*/
function preloader() {
  $('#ht-preloader').fadeOut();
};

/*------------------------------------
  HT FullScreen
--------------------------------------*/
function fullScreen() {
  if ($fullScreen.exists()) {
    $fullScreen.each(function () {
      var $elem = $(this),
        elemHeight = $window.height();
      if ($window.width() < 768) $elem.css('height', elemHeight / 1);
      else $elem.css('height', elemHeight);
    });
  }
  if ($halfScreen.exists()) {
    $halfScreen.each(function () {
      var $elem = $(this),
        elemHeight = $window.height();
      $elem.css('height', elemHeight / 2);
    });
  }
};

/*------------------------------------
  HT Menu
--------------------------------------*/
function menu() {
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
  });
};


/*------------------------------------
  HT Owl Carousel
--------------------------------------*/
function bannerslider() {
$('.banner-slider').each( function() {
  var $carousel = $(this);
  $carousel.owlCarousel({
      items:1,
      loop : true,
      dots : $carousel.data("dots"),
      nav : $carousel.data("nav"), 
      animateIn: 'fadeIn', 
      animateOut: 'fadeOut',  
      autoplay : true,
      autoplayTimeout : 6000,
      navText : [ '<span class="fas fa-chevron-left"><span>', '<span class="fas fa-chevron-right"></span>' ],
  });
});
};


/*------------------------------------
  HT Counter
--------------------------------------*/
function counter() {  
  $('.count-number').countTo({
    refreshInterval: 2
  });   
};

/*------------------------------------
  HT Owl Carousel
--------------------------------------*/
function owlcarousel() {
  $('.owl-carousel').each(function () {
    var $carousel = $(this);
    $carousel.owlCarousel({
      items: $carousel.data("items"),
      slideBy: $carousel.data("slideby"),
      center: $carousel.data("center"),
      loop: true,
      margin: $carousel.data("margin"),
      dots: $carousel.data("dots"),
      nav: $carousel.data("nav"),
      autoplay: $carousel.data("autoplay"),
      autoplayTimeout: $carousel.data("autoplay-timeout"),
      navText: ['<span class="fas fa-long-arrow-alt-left"><span>', '<span class="fas fa-long-arrow-alt-right"></span>'],
      responsive: {
        0: {
          items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1
        },
        576: {
          items: $carousel.data('sm-items')
        },
        768: {
          items: $carousel.data('md-items')
        },
        1024: {
          items: $carousel.data('lg-items')
        },
        1200: {
          items: $carousel.data("items")
        }
      },
    });
  });
};


/*------------------------------------
  HT Magnific Popup
--------------------------------------*/
function magnificpopup() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a.popup-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
  if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }
};

/*------------------------------------
  HT Isotope
--------------------------------------*/
function isotope() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  // bind filter button click
  $('.portfolio-filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('.portfolio-filter').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
};

/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var pxShow = 300,
    goTopButton = $(".scroll-top")
    // Show or hide the button
  if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
    } else {
      goTopButton.removeClass('scroll-visible')
    }
  });
  $('.smoothscroll').on('click', function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
};

/*------------------------------------
  HT Banner Section
--------------------------------------*/
function headerheight() {
  $('.fullscreen-banner .align-center').each(function () {
    var headerHeight = $('.header').height();
    // headerHeight+=15; // maybe add an offset too?
    $(this).css('padding-top', headerHeight + 'px');
  });
};

/*------------------------------------
  HT Fixed Header
--------------------------------------*/
function fxheader() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
      $('#header-wrap').addClass('fixed-header');
    } else {
      $('#header-wrap').removeClass('fixed-header');
    }
  });
};

/*------------------------------------------
  HT Text Color, Background Color And Image
---------------------------------------------*/
function databgcolor() {
  $('[data-bg-color]').each(function (index, el) {
    $(el).css('background-color', $(el).data('bg-color'));
  });
  $('[data-text-color]').each(function (index, el) {
    $(el).css('color', $(el).data('text-color'));
  });
  $('[data-bg-img]').each(function () {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
};


/*------------------------------------
  HT Contact Form
--------------------------------------*/
function contactform() {
  $('#contact-form, #queto-form').validator();
  // when the form is submitted
  $('#contact-form, #queto-form').on('submit', function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "php/contact.php";
      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          // data = JSON object that contact.php returns
          // we recieve the type of the message: success x danger and apply it to the 
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;
          // let's compose Bootstrap alert box HTML
          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $('#contact-form, #queto-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
            // empty the form
            $('#contact-form, #queto-form')[0].reset();
          }
        }
      });
      return false;
    }
  })
  $('.contact-btn').bind('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.contact-form').animate({
        right: '-450px'
      });
    } else {
      $('.contact-form').animate({
        right: '0'
      });
      $(this).addClass('active');
    }
  });
  $('.close-btn').bind('click', function () {
    $('.contact-form').animate({
      right: '-450px'
    });
  });
};

/*------------------------------------
  HT ProgressBar
--------------------------------------*/
function progressbar() {
  var progressBar = $('.progress');
  if (progressBar.length) {
    progressBar.each(function () {
      var Self = $(this);
      Self.appear(function () {
        var progressValue = Self.data('value');
        Self.find('.progress-bar').animate({
          width: progressValue + '%'
        }, 1000);
      });
    })
  }
};

/*------------------------------------
  HT Masonry
--------------------------------------*/
function masonry() {
  var $masonry = $('.masonry'),
    $itemElement = '.masonry-brick',
    $filters = $('.portfolio-filter');
  if ($masonry.exists()) {
    $masonry.isotope({
      resizable: true,
      itemSelector: $itemElement,
    });
    // bind filter button click
    $filters.on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $masonry.isotope({
        filter: filterValue
      });
    });
  }
};

/*------------------------------------
  HT Countdown
--------------------------------------*/
function countdown() {
  $('.countdown').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
    });
  });
};


/*------------------------------------
  HT Parallax
--------------------------------------*/
function parallax() {
  $(".parallaxie").parallaxie({
      speed: 0.4,
      offset: 0,
  });
};

/*------------------------------------
  HT Particles
--------------------------------------*/
function particles() {
  $('#particles').particleground({
    dotColor: '#555',
    lineColor: 'rgba(255,255,255,0.1)'
  });
};

/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function () {
  bannerslider(),
  owlcarousel(),
  fullScreen(),
  menu(), 
  counter(),
  magnificpopup(),
  scrolltop(),
  headerheight(),
  fxheader(),
  databgcolor(),
  contactform(),
  progressbar(),
  countdown(),
  parallax(),
  particles();
});

$window.resize(function() {
});

$(window).on('load', function () {
  preloader(),
  isotope(),
  masonry();
});