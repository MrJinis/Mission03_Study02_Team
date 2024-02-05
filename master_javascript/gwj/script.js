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
  $(".box").mouseover(function(){
      $(this).css
    ("background-color", "rgba(0, 0, 0, 0.5)");
    });
  
  $(".box").mouseout(function(){
    $(this).css
    ("background-color", "rgba(0, 0, 0, 0)");
    });

  $(".innerbox3, .innerbox4").mouseover(function(){
    $(this).css
    ("background-color", "rgba(230, 230, 230, 0.5)");
    });
  $(".innerbox3, .innerbox4").mouseout(function(){
    $(this).css
    ("background-color", "rgba(230, 230, 230, 0)");
    });

});

