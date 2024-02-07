$(".main-slide").vegas({
  delay: 5000,
  timer: false,
  slides: [
      { src: "../image/images/main_1.jpg" },
      { src: "../image/images/main_2.jpg" },
      { src: "../image/images/main_3.jpg" },
      { src: "../image/images/main_4.jpg" }
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

    $(".textwrap").mouseover(function(){
      $(this).css
      ("background-color", "rgba(230, 230, 230, 0.5)");
      });
    $(".textwrap").mouseout(function(){
      $(this).css
      ("background-color", "rgba(0, 0, 0, 0.3)");
      });
  
});

