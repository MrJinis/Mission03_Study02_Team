$(".main-slide").vegas({
  delay: 5000,
  timer: false,
  slides: [
      { src: "master_resource/gwj/images/main_1.jpg" },
      { src: "master_resource/gwj/images/main_2.jpg" },
      { src: "master_resource/gwj/images/main_3.jpg" },
      { src: "master_resource/gwj/images/main_4.jpg" }
  ]
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
