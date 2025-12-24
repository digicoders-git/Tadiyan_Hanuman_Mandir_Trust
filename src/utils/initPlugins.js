/* Global jQuery from assets */
const $ = window.jQuery;

export const initPlugins = () => {
  if (!$) {
    console.warn("jQuery not loaded yet.");
    return;
  }

  (function ($) {
    'use strict';

    /*-------------------------------------------------------------------------------
      Preloader - Hide it if present
    -------------------------------------------------------------------------------*/
    $('.sigma_preloader').addClass('hidden');

    /*-------------------------------------------------------------------------------
      Sticky Header
    -------------------------------------------------------------------------------*/
    var header = $(".can-sticky");
    if (header.length > 0) {
      var headerHeight = header.innerHeight();
      var doSticky = function () {
        if (window.pageYOffset > headerHeight) {
          header.addClass("sticky");
        } else {
          header.removeClass("sticky");
        }
      };
      doSticky();
      $(window).off('scroll.sticky').on('scroll.sticky', doSticky);
    }

    /*-------------------------------------------------------------------------------
      Aside Menu Toggle
    -------------------------------------------------------------------------------*/
    $(".aside-trigger-left").off('click').on('click', function () {
      $(".sigma_aside-left").toggleClass('open');
    });

    $(".sigma_aside .menu-item-has-children > a").off('click').on('click', function (e) {
      var submenu = $(this).next(".sub-menu");
      e.preventDefault();
      submenu.slideToggle(200);
    });

    /*-------------------------------------------------------------------------------
      Magnific Popup
    -------------------------------------------------------------------------------*/
    if ($.fn.magnificPopup) {
      $('.popup-youtube, .popup-vimeo, .popup-video').magnificPopup({ type: 'iframe' });
      $('.gallery-thumb').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
      });
    }

    /*-------------------------------------------------------------------------------
      Slick Sliders
    -------------------------------------------------------------------------------*/
    if ($.fn.slick) {
      // Banner slider
      $(".sigma_banner-slider").each(function () {
        if (!$(this).hasClass('slick-initialized')) {
          $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 991,
                settings: { arrows: false }
              }
            ]
          });
        }
      });

      // Dot slider (About page, etc)
      $(".basic-dot-slider").each(function () {
        if (!$(this).hasClass('slick-initialized')) {
          $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true
          });
        }
      });

      // Testimonials
      $(".sigma_testimonial-slider").each(function () {
        if (!$(this).hasClass('slick-initialized')) {
          $(this).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.testimonial-section .slider-prev'),
            nextArrow: $('.testimonial-section .slider-next'),
            dots: false,
            autoplay: true,
            responsive: [{ breakpoint: 767, settings: { slidesToShow: 1 } }]
          });
        }
      });

      // Portfolio slider
      $(".portfolio-slider").each(function () {
        if (!$(this).hasClass('slick-initialized')) {
          $(this).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            prevArrow: $('.portfolio-section .slider-prev'),
            nextArrow: $('.portfolio-section .slider-next'),
            responsive: [{ breakpoint: 767, settings: { slidesToShow: 1 } }]
          });
        }
      });
    }

    /*-------------------------------------------------------------------------------
      Masonry / Isotope
    -------------------------------------------------------------------------------*/
    if ($.fn.isotope) {
      $('.masonry').each(function () {
        var $container = $(this);
        if ($.fn.imagesLoaded) {
          $container.imagesLoaded(function () {
            $container.isotope({
              itemSelector: '.masonry-item'
            });
          });
        } else {
          $container.isotope({
            itemSelector: '.masonry-item'
          });
        }
      });

      if ($('.portfolio-filter').length > 0) {
        $('.portfolio-filter').isotope({
          itemSelector: '.col-lg-4',
          percentPosition: true,
          masonry: {
            columnWidth: '.col-lg-4'
          }
        });
      }
    }

    /*-------------------------------------------------------------------------------
      Back to Top
    -------------------------------------------------------------------------------*/
    var stickBackToTop = function () {
      if (window.pageYOffset > 400) {
        $('.sigma_top').addClass('active');
      } else {
        $('.sigma_top').removeClass('active');
      }
    };
    stickBackToTop();
    $(window).off('scroll.top').on('scroll.top', stickBackToTop);

    $('.sigma_top, .back-to-top').off('click').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

  })(jQuery);
};
