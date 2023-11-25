// menu navbar code
$(".navbtn").click(function(){
  $(".navbtn button .s-1").show(100).toggleClass("active")
  $(".navbtn button .s-2").toggle(100)
  $(".navbtn button .s-3").show(100).toggleClass("active")
  $(".links").toggle(500).toggleClass("navmenu");
  $(".user").toggle(500).toggleClass("navmenu");
})

$(".mobile-nav-btn").click(function(){
  $(".mobile-nav-btn button .s-1").show(100).toggleClass("active")
  $(".mobile-nav-btn button .s-2").toggle(100)
  $(".mobile-nav-btn button .s-3").show(100).toggleClass("active")
  $(".mobile-nav").toggle(500).toggleClass("show")
})

// owlCarousel slider

$('.owl-carousel.owl-one').owlCarousel({
  margin: 10,
  nav: true,
  dots: false,
  loop: true,
  autoplay: false,
  autoplayTime: 5000,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive: {
      0: {
          items: 0
      },
      50: {
          items: 1
      }
    }
});


$( ".owl-prev").html('<i class="fa fa-arrow-left"></i>');
$( ".owl-next").html('<i class="fa fa-arrow-right"></i>');

$('.owl-carousel.owl-two').owlCarousel({
  margin: 10,
  nav: true,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTime: 5000,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive: {
      0: {
          items: 0
      },
      100: {
          items: 1
      }
    }
});

$( ".owl-two .owl-prev").html('<i class="fa fa-angle-left"></i>');
$( ".owl-two .owl-next").html('<i class="fa fa-angle-right"></i>');
