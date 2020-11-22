(function ($) {
	"use strict";
    $(".bar-icons").click(function(){
      $(".responsive-header").toggleClass("siteBar")
  })

  $(".hero-carousel").owlCarousel({
    items:1,
    nav:true,
    navText: ["<img src='assets/images/caret-left.svg'/>", "<img src='assets/images/caret-right.svg'/>"],
    dots:true,
    loop:true,
    margin:20,
    autoplay:true,
    startPosition: 1,
    autoplayTimeout:10000,
    smartSpeed:1000,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav: false
          
      },
      768:{
        items:1,
      },
      1000:{
        items:1,
      }
    }
  });

  $(".large-slider").owlCarousel({
    items:1,
    nav:true,
    navText: ["<img src='assets/images/caret-left.svg'/>", "<img src='assets/images/caret-right.svg'/>"],
    navContainer: '#large-slider-navContainer',
    dots:true,
    loop:true,
    margin:30,
    stagePadding: 20,
    autoplay:false,
    startPosition: 1,
    autoplayTimeout:10000,
    smartSpeed:1000,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav: false
          
      },
      768:{
        items:1,
        nav: false
      },
      1000:{
        items:1,
      }
    }
  });

  $('.form-main input').focus(function(){
    $('.form-main input').parent().removeClass('form-group-active')
    $(this).parent().addClass('form-group-active')
  })


}(jQuery));	


